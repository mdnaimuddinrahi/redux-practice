import axiosInstance from "../../utils/axios"

export const getTransactions = async () => {
    const response = await axiosInstance.get('/expense')

    return response.data.data
}

export const addTransaction = async (data) => {
    const response = await axiosInstance.post('/expense', data)

    return response.data.data
}

export const editTransaction = async (id, data) => {
    const response = await axiosInstance.put(`/expense/${id}`, data)

    return response.data.data
}


export const deleteTransaction = async (id) => {
    const response = await axiosInstance.delete(`/expense/${id}`)

    return response.data.data
}