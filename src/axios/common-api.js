import { instance } from "@/axios/axios";
import { userStore } from "@/store/userStore";
import { signupInfoStore } from "@/views/signup/store/singupInfoStore";

const setUserInfo = (isUser = true, isSignup = false) => {
    instance
        .get(`/users/v1/info`)
        .then(res => {
            const statusCode = res?.status.statusCode;
            if (statusCode !== "C000") {
                return;
            }
            const body = res?.body;
            !!isUser && userStore().set(body);
            !!isSignup &&
                signupInfoStore().set({
                    name: body.name,
                    birthdate: body.birthdate,
                    genderType: body.genderType
                });
        })
        .catch(() => {});
};

export { setUserInfo };
