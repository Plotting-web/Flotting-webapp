import { instance } from "@/axios/axios";
import { userStore } from "@/store/userStore";
import { signupInfoStore } from "@/views/signup/store/singupInfoStore";

const setUserInfo = (isUser = true, isSignup = false) => {
    instance
        .get(`/users/v1/info`)
        .then(res => {
            !!isUser && userStore().set(res.body);
            !!isSignup && signupInfoStore().set(res.body);
        })
        .catch(() => {});
};

export { setUserInfo };
