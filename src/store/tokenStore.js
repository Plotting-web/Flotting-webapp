import { ref } from "vue";
import { defineStore } from "pinia";

export const tokenStore = defineStore(
    "tokenStore",
    () => {
        const accessToken = ref("");
        const refreshToken = ref("");
        const accessTokenExpiredAt = ref(0);
        const refreshTokenExpiredAt = ref(0);

        const getAccessToken = () => accessToken.value;
        const setAccessToken = val => (accessToken.value = val);

        const getRefreshToken = () => refreshToken.value;
        const setRefreshToken = val => (refreshToken.value = val);

        const isLogin = () => {
            return !!accessToken.value && !!refreshToken.value && accessTokenExpiredAt.value > Date.now();
        };

        const reset = () => {
            accessToken.value = "";
            refreshToken.value = "";
            accessTokenExpiredAt.value = 0;
            refreshTokenExpiredAt.value = 0;
        };

        const get = () => {
            return {
                accessToken: accessToken.value,
                refreshToken: refreshToken.value,
                accessTokenExpiredAt: accessTokenExpiredAt.value,
                refreshTokenExpiredAt: refreshTokenExpiredAt.value
            };
        };

        const set = ({ accessToken: acs = "", refreshToken: ref = "", accessTokenExpiredAt: acsAt = 0, refreshTokenExpiredAt: refAt = 0 }) => {
            !!acs && (accessToken.value = acs);
            !!ref && (refreshToken.value = ref);
            !!acsAt && (accessTokenExpiredAt.value = acsAt);
            !!refAt && (refreshTokenExpiredAt.value = refAt);
        };

        const log = () => {
            console.log("Token Store >> ", get());
        };

        return {
            accessToken,
            refreshToken,
            accessTokenExpiredAt,
            refreshTokenExpiredAt,
            getAccessToken,
            setAccessToken,
            getRefreshToken,
            setRefreshToken,
            isLogin,
            get,
            set,
            reset,
            log
        };
    },
    {
        persist: true
    }
);
