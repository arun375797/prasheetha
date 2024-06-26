import axios from "axios";

const axiosInstance = axios.create({
    baseURL:'https://proj-backend-1.onrender.com'
})

axiosInstance.interceptors.request.use((config)=>{
    const studentToken = sessionStorage.getItem('studentToken');
    const adminToken = sessionStorage.getItem('adminToken');

    if(studentToken){
        if(config) config.headers.token = studentToken;
    }
    if(adminToken){
        if(config) config.headers.token = adminToken;
    }
    return config;},
    (error)=>{
    return Promise.reject(error);
}

)

export default axiosInstance;