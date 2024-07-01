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

const handleErrorAlerts = code => {
    let msg = "";
    switch (code) {
        case "U001":
            msg = "해당 사용자를 찾을 수 없습니다.";
            break;
        case "U002":
            msg = "해당 사용자는 비활성화 상태입니다.";
            break;
        case "U003":
            msg = "사용자 조회 권한이 없습니다.";
            break;
        case "U004":
            msg = "파일을 찾을 수 없거나 접근 권한이 없습니다.";
            break;
        case "U005":
            msg = "지원되지 않는 파일 형식입니다.";
            break;
        case "T001":
            msg = "해당 매칭권을 찾을 수 없습니다.";
            break;
        case "T002":
            msg = "매칭권 결제 요청이 잘못되었습니다.";
            break;
        case "TH001":
            msg = "매칭권 기록을 찾을 수 없습니다.";
            break;
        case "UT001":
            msg = "사용 중인 매칭권을 찾을 수 없습니다.";
            break;
    }
    !!msg && alert(msg);

    return !!msg;
};

export { setUserInfo, handleErrorAlerts };
