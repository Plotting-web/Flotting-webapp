import { ref } from "vue";
import { defineStore } from "pinia";

export const loginStore = defineStore(
    "loginStore",
    () => {
        const name = ref("");
        const phoneNumber = ref("");
        const email = ref("");
        const userNo = ref("");
        const accessToken = ref("");
        const refreshToken = ref("");

        const getUserNo = () => userNo.value;
        const setUserNo = val => (userNo.value = val);

        const getAccessToken = () => accessToken.value;
        const setAccessToken = val => (accessToken.value = val);

        const getRefreshToken = () => refreshToken.value;
        const setRefreshToken = val => (refreshToken.value = val);

        const isLogin = () => {
            return !!accessToken.value;
            // TODO: refreshToken 로직 개발 끝나면 다시 돌려놔야함.
            // return !!accessToken.value && !!refreshToken.value;
        };

        const getUserInfo = () => {
            return {
                name: name.value,
                phoneNumber: phoneNumber.value,
                email: email.value,
                userNo: userNo.value
            };
        };

        const setUserInfo = ({ name = "", phoneNumber = "", email = "", userNo = "" }) => {
            this.name.value = name;
            this.phoneNumber.value = phoneNumber;
            this.email.value = email;
            this.userNo.value = userNo;
        };

        const setToken = ({ accessToken = "", refreshToken = "" }) => {
            this.accessToken.value = accessToken;
            this.refreshToken.value = refreshToken;
        };

        const reset = () => {
            name.value = "";
            phoneNumber.value = "";
            email.value = "";
            userNo.value = "";
            accessToken.value = "";
            refreshToken.value = "";
        };

        return {
            getAccessToken,
            setAccessToken,
            getRefreshToken,
            setRefreshToken,
            isLogin,
            getUserInfo,
            setUserInfo,
            setToken,
            getUserNo,
            setUserNo,
            reset
        };
    },
    {
        persist: {
            enabled: true,
            storage: localStorage,
            strategies: [
                {
                    UserNo: "l"
                }
            ]
        }
    }
);
