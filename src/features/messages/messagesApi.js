import { apiSlice } from "../api/apiSlice";

export const messagesApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getMessages: builder.query({
            query: (id) => ({
                url: '/conversation-messages',
                params: {
                    limit: 5,
                    order: "desc",
                    page: 1,
                    sort: "timestamp",
                    conversationId: id
                }
            }),
            async onQueryStarted(arg, { queryFulfilled }) {
                try {
                    const result = await queryFulfilled;
                    console.log('result :>> ', result);
                } catch (error) {
                    console.log('error :>> ', error);
                }
            }
            
        }),
        addMessage: builder.mutation({
            query: (data) => {
                console.log('data :>> ', data);

                return {
                    url: '/conversation-messages',
                    method: 'POST',
                    body: data
                }
            }
        }),
        editMessage: builder.mutation({
            query: ({id, data}) => ({
                url: `/conversation-messages/${id}`,
                method: 'PUT',
                body: data
            }),
        })
    })
});

export const { useGetMessagesQuery, useAddMessageMutation, useEditMessageMutation } = messagesApi;