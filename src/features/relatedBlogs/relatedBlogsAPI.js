import axiosInstance from "../../utils/axios"

export const getRelatedBlogs = async ({id, tags}) => {
    const response = await axiosInstance.get('/related-blogs',
        {
            params: {
                'id': id,
                'tags[]': tags,
            }
        }
    )

    return response.data
}