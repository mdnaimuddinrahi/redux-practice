import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        // endpoints here
        register: builder.mutation({
            query: (data) => {
                return {
                    url: "/register",
                    method: "POST",
                    body: data,
                };
            },
            async onQueryStarted(arg, {queryFulfilled, dispatch}) {
                try {
                    const result = await queryFulfilled;
                    console.log('result :>> ', result.data.access_token);
                    localStorage.setItem('auth', JSON.stringify({
                        accessToken: result.data.access_token,
                        user: result.data.user,
                    }))
                    dispatch(userLoggedIn({
                        accessToken: result.data.access_token,
                        user: result.data.user,
                    }))
                } catch(error) {
                    // do nothing
                }
            }
        }),
        login: builder.mutation({
            query: (data) => ({
                url: "/login",
                "method": "POST",
                body: data
            }),
            async onQueryStarted(arg, {queryFulfilled, dispatch}) {
                try {
                    const result = await queryFulfilled;
                    localStorage.setItem('auth', JSON.stringify({
                        accessToken: result.data.accessToken,
                        user: result.data.user,
                    }))
                    dispatch(userLoggedIn({
                        accessToken: result.data.accessToken,
                        user: result.data.user,
                    }))
                } catch(error) {
                    // do nothing
                }
            }
        })
    })
})

export const {useLoginMutation, useRegisterMutation} = authApi;