import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { userLoggedOut } from '../auth/authSlice';

// console.log(import.meta.env);
const baseQuery = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    prepareHeaders: async (headers, {getState, endpoints}) => {
        const token = getState()?.auth?.accessToken;
        // console.log('token :>> ', getState());

        if (token) {
            headers.set("Authorization", `Bearer ${token}`)
        }

        return headers
    }
});

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: async (args, api, extraOptions) => {
        let result = await baseQuery(args, api, extraOptions);
        if (result?.error?.status === 401) {
            api.dispatch(userLoggedOut());
            // localStorage.removeItem('auth');
            localStorage.clear();
        }
        return result;
        // try {
        //     const result = await baseQuery(args, api, extraOptions);
        //     if (result?.error?.status === 401) {
        //         // console.log('refreshing token');
        //         const refreshResult = await baseQuery('/auth/refresh', api, extraOptions);
        //         if (refreshResult?.data) {
        //             // console.log('refreshResult :>> ', refreshResult);
        //             const { accessToken } = refreshResult.data;
        //             api.dispatch({ type: 'auth/setCredentials', payload: { accessToken } });
        //             // Retry the original query with the new access token
        //             return await baseQuery(args, api, extraOptions);
        //         } else {
        //             // console.log('refresh failed :>> ', refreshResult);
        //             api.dispatch({ type: 'auth/logout' });
        //         }
        //     }
        //     return result;
        // } catch (error) {
        //     console.error('API error:', error);
        //     throw error;
        // }
    },
    tagTypes: [],
    endpoints: (builder) => ({

    }) 
});

