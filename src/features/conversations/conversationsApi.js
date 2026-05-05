import { apiSlice } from "../api/apiSlice";
import {messagesApi} from "../messages/messagesApi";

export const conversationsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
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
            }
        }),
        getConversation: builder.query({
            query: ({userEmail, participantEmail}) => ({
                url: '/conversation/show',
                params: {
                    user_email: userEmail,
                    participant_email: participantEmail
                }
            })
        }),
        addConversation: builder.mutation({ 
            query: (data) => ({
                url: '/conversations',
                method: 'POST',
                body: data
            }),
            // started
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                const conversation = await queryFulfilled;
                console.log(' add conversation :>> ', conversation.data.data);
                console.log('arg :>> ', arg);

                if (conversation?.data?.data?.id) {
                    // silent entry to message table
                    // dispatch(messagesApi.util.updateQueryData('getMessages', { email: arg.email, user_id: arg.user_id }, (draft) => {
                    //     draft.push(conversation.data);
                    // }));
                    const messageData = {
                        conversation_id: conversation?.data?.data?.id,
                        sender_id: arg.data.senderId,
                        receiver_id: arg.data.user_id,
                        message: conversation.data.data.message
                    }
                    console.log('messageData :>> ', messageData);
                    dispatch(messagesApi.endpoints.addMessage.initiate(messageData))
                }
            },
            // end
        }),
        editConversation: builder.mutation({
            query: ({conversationId, data}) => ({
                url: `/conversations/${conversationId}`,
                method: 'PUT',
                body: data
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                const conversation = await queryFulfilled;
                console.log('edit conversation :>> ', conversation);
                console.log('arg.data  :>> ', arg.data);

                if (conversation?.data?.data?.id) {
                    const messageData = {
                        conversation_id: arg.conversationId,
                        sender_id: arg.data.senderId,
                        receiver_id: arg.data.user_id,
                        message: conversation.data.data.message
                    }
                    console.log('messageData :>> ', messageData);
                    dispatch(messagesApi.endpoints.addMessage.initiate(messageData))
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