import { apiSlice } from "../api/apiSlice";
import {messagesApi} from "../messages/messagesApi";

export const conversationsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        
        getConversation: builder.query({
            query: ({ userEmail, participantEmail }) => ({
                url: '/conversation/show',
                params: {
                    user_email: userEmail,
                    participant_email: participantEmail
                }
            }),

        }),
        addConversation: builder.mutation({ 
            query: (data) => ({
                url: '/conversations',
                method: 'POST',
                body: {
                    user_id: data.user_id,
                    senderId: data.senderId,
                    message: data.message,
                }
            }),
            // started
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                
                const conversation = await queryFulfilled;
                // console.log(' add conversation :>> ', conversation.data.data);
                // console.log('arg :>> ', arg);

                if (conversation?.data?.data?.id) {
                    // silent entry to message table
                    // dispatch(messagesApi.util.updateQueryData('getMessages', { email: arg.email, user_id: arg.user_id }, (draft) => {
                    //     draft.push(conversation.data);
                    // }));
                    const messageData = {
                        conversation_id: conversation?.data?.data?.id,
                        sender_id: arg.senderId,
                        receiver_id: arg.user_id,
                        message: conversation.data.data.message
                    }
                    // console.log('messageData :>> ', messageData);
                    dispatch(messagesApi.endpoints.addMessage.initiate(messageData))
                }
            },
            // end
        }),
        getConversations: builder.query({
            query: ({email, user_id}) => {
                if (!email || !user_id) return null;

                return {
                    url: '/conversations',
                    params: {
                        email,
                        user_id,
                        page: 1,
                        limit: 5
                        
                    }
                };
            },
            
            async onQueryStarted(arg, { queryFulfilled }) {
                try {
                    const result = await queryFulfilled;

                    // console.log('result :>> ', result);
                    // console.log('response data :>> ', result.data);

                } catch (error) {
                    console.log('error :>> ', error);
                }
            }
        }),
        editConversation: builder.mutation({
            query: ({conversationId, data}) => ({
                url: `/conversations/${conversationId}`,
                method: 'PUT',
                body: {
                    user_id: data.user_id,
                    senderId: data.senderId,
                    message: data.message,
                }
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                // optimistic cache update start
                // console.log('email: sender::> ', arg.data.senderEmail);

                // console.table('optimistic update arg :>> ', { email: arg.data.senderEmail, user_id: arg.data.senderId })
                const patchDispatch = dispatch(
                    apiSlice.util.updateQueryData(
                        'getConversations',
                        { email: arg.data.senderEmail, user_id: arg.data.senderId },
                        (draft) => {

                            const draftConversation = draft.conversations.find(
                                c => c.id == arg.conversationId
                            );
                            if (draftConversation) {
                                draftConversation.message = arg.data.message;
                                draftConversation.timestamp = arg.data.timestamp;
                            }

                        }
                    )
                );
                // optimistic update end
                try {
                    const conversation = await queryFulfilled;
                    // console.log('edit conversation data :>> ', conversation);
                    // console.log('argument.data  :>> ', arg.data);

                    if (conversation?.data?.data?.id) {
                        const messageData = {
                            conversation_id: arg.conversationId,
                            sender_id: arg.data.senderId,
                            receiver_id: arg.data.user_id,
                            message: conversation.data.data.message
                        }
                        // console.log('messageData :>> ', messageData);
                        dispatch(messagesApi.endpoints.addMessage.initiate(messageData))
                    }
                } catch (error) {
                    patchDispatch.undo();
                }
            },
        }),
    })
});

export const { 
    useGetConversationsQuery,
    useGetConversationQuery,
    useEditConversationMutation,
    useAddConversationMutation
} = conversationsApi;