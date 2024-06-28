import axios from "axios";
import { tokenStore } from "@/store/tokenStore";

const instance = axios.create({
    headers: {
        // TODO : CORS 에러 해결 되면 주석 해제
        // "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json"
    },
    baseURL: process.env.VUE_FLOTTING_API_URL
});

instance.interceptors.request.use(
    config => {
        const accessToken = tokenStore().getAccessToken();
        console.log("Request Interceptor:", config);
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
        console.log("Response Interceptor:", response);
        return response.data;
    },
    error => {
        console.error("Response Error Interceptor:", error);
        return Promise.reject(error);
    }
);

export { instance };
