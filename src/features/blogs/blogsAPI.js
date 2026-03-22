import axiosInstance from "../../utils/axios"

export const getBlogs = async ({is_saved, sort_by}) => {
    const response = await axiosInstance.get('/blogs',
        {
            params: {
                'is_saved': is_saved,
                'sort_by': sort_by,
            }
        }
    )

    return response.data
}