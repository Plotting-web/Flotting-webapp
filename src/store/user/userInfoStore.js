import { ref } from "vue";
import { defineStore } from "pinia";

export const userInfoStore = defineStore(
    "userStore",
    () => {
        const userInfo = ref({
            email: "",
            name: "",
            phoneNumber: "",
            accessToken: "",
            userNo: ""
        });

        const getUserInfo = () => userInfo.value;
        const getUserAccessToken = () => userInfo.value.accessToken;
        const resetUserAccessToken = () => (userInfo.value.accessToken = "");
        const setUserInfo = newUserInfo => {
            userInfo.value = newUserInfo;
        };
        const resetUserInfo = () => {
            userInfo.value = {
                email: "",
                name: "",
                phoneNumber: "",
                accessToken: ""
            };
        };

        const isValid = () => userInfo.value.accessToken !== "";
        const getUserNo = () => userInfo.value.userNo;

        return {
            userInfo,
            getUserInfo,
            getUserAccessToken,
            setUserInfo,
            resetUserInfo,
            resetUserAccessToken,
            isValid,
            getUserNo
        };
    },
    {
        persist: {
            enabled: true,
            storage: sessionStorage,
            strategies: [
                {
                    key: "userInfo"
                }
            ]
        }
    }
);
