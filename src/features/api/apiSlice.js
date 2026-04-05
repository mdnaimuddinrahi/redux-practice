import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

console.log(import.meta.env);

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_API_URL,
        prepareHeaders: async (headers, {getState, endpoints}) => {
            const token = getState()?.auth?.accessToken;
            console.log('token :>> ', getState());

            if (token) {
                headers.set("Authorization", `Bearer ${token}`)
            }

            return headers
        }
    }),
    tagTypes: [],
    endpoints: (builder) => ({

    }) 
});

