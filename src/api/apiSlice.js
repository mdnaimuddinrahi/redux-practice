import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const TAG_VIDEOS = 'Videos';
const TAG_VIDEO = "Video";
const TAG_RELATEDVIDEO = "RelatedVideos";

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://jobtrack.test/api',
    }),
    tagTypes: [TAG_VIDEOS, TAG_VIDEO, TAG_RELATEDVIDEO],
    endpoints: (builder) => ({
        getVideos: builder.query({
            query: () => '/videos',
            keepUnusedDataFor: 30,
            providesTags: [TAG_VIDEOS],
        }),
        getVideo: builder.query({
            query: (vedioId) => `/videos/${vedioId}`,
            providesTags: [TAG_VIDEO],
        }),
        getRelatedVideos: builder.query({
            query: ({id, title}) => {
                return {
                    url: '/related-videos',
                    params: {
                        id: id,
                        title: title,
                    }
                }
            },
            providesTags: (result, errror, arg) => {
                return [
                    {type: TAG_RELATEDVIDEO, id: arg.id}
                ]
            }
        }),
        addVideo: builder.mutation({
            query: (data) => {
                return {
                    url: '/videos',
                    method: 'POST',
                    body: data
                }
            },
            invalidatesTags: [TAG_VIDEOS]
        }),
        editVideo: builder.mutation({
            query: ({id, data}) => {
                return {
                    url: `/videos/${id}`,
                    method: 'PUT',
                    body: data,
                }
            },
            invalidatesTags: (result, error, arg) => {
                // console.table(result, error, arg);
                // console.log('result, error, arg :>> ', result, error, arg);
                // console.log('result :>> ', result);
                // console.log('error :>> ', error);
                // console.log('arg :>> ', arg);
                return [
                    TAG_VIDEOS,
                    {type: TAG_VIDEO, id: arg.id}
                ]
            }
        }),
        deleteVideo: builder.mutation({
            query: (id) => {
                return {
                    url: `/videos/${id}`,
                    method: 'DELETE',
                }
            },
            invalidatesTags: (result, error, arg) => {
                // console.table(result, error, arg);
                console.log('result, error, arg :>> ', result, error, arg);
                console.log('result :>> ', result);
                console.log('error :>> ', error);
                console.log('arg :>> ', arg);
                return [ TAG_VIDEOS, ]
            }
        })
    }),
})

export const { useGetVideosQuery, 
    useGetVideoQuery, 
    useGetRelatedVideosQuery,
    useAddVideoMutation,
    useEditVideoMutation,
    useDeleteVideoMutation
 } = apiSlice;