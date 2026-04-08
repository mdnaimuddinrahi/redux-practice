import { apiSlice } from "../api/apiSlice";

export const conversationsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getConversations: builder.query({
            query: ({email, user_id}) => {
                if (!email || !user_id) return null;
                // console.log('email, user_id :>> ', email, user_id);

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
        })
    })
});

export const { useGetConversationsQuery } = conversationsApi;