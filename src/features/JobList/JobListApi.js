import axiosInstance from "../../utils/axios"

export const getJobList = async () => {
    const response = await axiosInstance.get('/job-seeker')
    
    return response.data.data
}

export const addJobSeek = async (data) => {
    const response = await axiosInstance.post('/job-seeker', data)
console.log('response :>> ', response);
    return response.data.data
}

export const editJobSeek = async ({id, data}) => {
    console.log({id, data});
    const response = await axiosInstance.put(`/job-seeker/${id}`, data)
    return response.data.data
}

export const removeJobSeek = async (id) => {
    const response = await axiosInstance.delete(`/job-seeker/${id}`)

    return response.data.data
}