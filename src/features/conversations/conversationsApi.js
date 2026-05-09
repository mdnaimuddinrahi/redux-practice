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
                    console.log('response data :>> ', result.data);

                } catch (error) {
                    console.log('error :>> ', error);
                }
            }
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
                console.log('arg :>> ', arg);
                const patchDispatch = dispatch(
                    // before sending the request, we are updating the cache data for getConversations by adding new conversation endpoint
                    apiSlice.util.updateQueryData(
                        'getConversations',
                        { 
                            email: arg.senderEmail,
                            user_id: arg.senderId 
                        },
                        (draft) => {
                            const newConversation = {
                                id: draft.conversations.length + 1, // This is just a temporary ID. In a real application, you would use the ID returned from the server.
                                message: arg.message,
                                participants: arg.participants,
                                timestamp: arg.timestamp,
                                users: arg.users,
                            }
                            draft.conversations.unshift(newConversation);
                        }
                    )
                );
                try {
                    const conversation = await queryFulfilled;

                    if (conversation?.data?.data?.id) {
                        // silent entry to message table
                        const messageData = {
                            conversation_id: conversation?.data?.data?.id,
                            sender_id: arg.senderId,
                            receiver_id: arg.user_id,
                            message: conversation.data.data.message
                        }
                        // console.log('messageData :>> ', messageData);
                        dispatch(messagesApi.endpoints.addMessage.initiate(messageData))
                    }
                } catch (error) {
                    patchDispatch.undo();
                }
            },
            // end
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
                console.log('arg :>> ', arg);
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

                    if (conversation?.data?.data?.id) {
                        const messageData = {
                            conversation_id: arg.conversationId,
                            sender_id: arg.data.senderId,
                            receiver_id: arg.data.user_id,
                            message: conversation.data.data.message
                        }
                        // console.log('messageData :>> ', messageData);
                        
                        const response = await dispatch(
                                messagesApi.
                                endpoints.
                                addMessage.
                                initiate(messageData)
                            ).unwrap(); // unwrap means we want to get the actual response data or error instead of the action object
                    
                        // update the message in the messages cache pesimistically
                        dispatch(
                            messagesApi.util.updateQueryData(
                                'getMessages',
                                arg.conversationId.toString(),
                                (draft) => {
                                    draft.push(response);
                                }
                            )
                         );
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