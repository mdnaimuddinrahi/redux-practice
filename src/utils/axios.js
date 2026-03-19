import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: "http://jobtrack.test/api",
})

export default axiosInstance