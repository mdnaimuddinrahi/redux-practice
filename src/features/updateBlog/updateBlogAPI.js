import axiosInstance from "../../utils/axios"

export const updateBlogAPI = async ({id, data}) => {
    console.log('{id, data} :>> ', id, data);
    const response = await axiosInstance.put(`/blogs/${id}`, data)

    return response.data.data
}