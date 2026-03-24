import axios from "axios";

const axiosInstance = axios.create({
    baseURLbaseURL: "http://jobtrack.test/api",
})

export default axiosInstance