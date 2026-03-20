import axiosInstance from "../../utils/axios"

export const getBlogs = async () => {
    const response = await axiosInstance.get('/blogs',
        // {
        //     params: {
        //         'search': search,
        //         'tags[]': tags,
        //     }
        // }
    )

    return response.data
}