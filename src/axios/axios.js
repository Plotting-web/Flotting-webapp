import axios from "axios";
import { loginStore } from "@/store/loginStore";

const instance = axios.create({
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json"
    },
    baseURL: process.env.VUE_FLOTTING_API_URL
});

instance.interceptors.request.use(
    config => {
        const accessToken = loginStore().getAccessToken();
        // console.log("Request Interceptor:", config);
        if (!!accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    error => {
        console.error("Request Error Interceptor:", error);
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    response => {
        // console.log("Response Interceptor:", response);
        return response;
    },
    error => {
        console.error("Response Error Interceptor:", error);
        return Promise.reject(error);
    }
);

export { instance };
