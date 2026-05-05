import { apiSlice } from "../api/apiSlice";
/**
 * ! this is not to used in the project, just for testing purpose.
 * 
 */
export const userApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: (email) => {
                if (!email) return null;

                return {
                    url: '/users',
                    params: {
                        email,
                    }
                };
            }
        })
        
    })
});

export const {useGetUsersQuery} = userApi;