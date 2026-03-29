import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://jobtrack.test/api',
    }),
    endpoints: (builder) => ({
        getVideos: builder.query({
            query: () => '/videos'
        }),
        getVideo: builder.query({
            query: (vedioId) => `/videos/${vedioId}`
        }),
        getRelatedVideos: builder.query({
            query: ({ id, title }) => {
                return {
                    url: '/related-videos',
                    params: {
                        id,
                        title, // RTK automatically handles array params
                    },
                };
            },
        }),
    }),
})

export const { useGetVideosQuery, useGetVideoQuery, useGetRelatedVideosQuery } = apiSlice;