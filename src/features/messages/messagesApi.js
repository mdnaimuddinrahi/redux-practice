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
            })
        })
    })
});

export const { useGetMessagesQuery } = messagesApi;