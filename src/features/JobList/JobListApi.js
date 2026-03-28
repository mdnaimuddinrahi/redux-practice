import { useSelector } from "react-redux"
import axiosInstance from "../../utils/axios"

export const getJobList = async (search) => {
    const response = await axiosInstance.get('/job-seeker', 
        {
            params: search
        }
    )
    
    return response.data.data
}

export const addJobSeek = async (data) => {
    const response = await axiosInstance.post('/job-seeker', data)
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