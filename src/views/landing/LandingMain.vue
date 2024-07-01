<script setup>
import router from "@/router";
import { onBeforeMount, onMounted, ref } from "vue";
import PlotLogo from "@/components/icon/PlotLogo.vue";
import MainBody from "@/components/layout/MainBody.vue";
import kakaoTalkLogo from "@/images/KakaoTalkLogo.png";
import { instance } from "@/axios/axios";
import { tokenStore } from "@/store/tokenStore";
import { userStore } from "@/store/userStore";
import { signupInfoStore } from "@/views/signup/store/singupInfoStore";

const niceFormRef = ref(null);
const encDataRef = ref(null);
const tokenVersionIdRef = ref(null);
const integrityValueRef = ref(null);

const onClickStart = () => {
    if (tokenStore().isLogin()) {
        router.push("/signup/guide");
        return;
    }
    const returnUrl = process.env.VUE_APP_BASE_URL + "/nice/callback";
    instance
        .get(`/nice/v1/enc/access-data?returnUrl=${returnUrl}`)
        .then(res => {
            const statusCode = res?.status.statusCode;
            if (statusCode !== "C000") {
                switch (statusCode) {
                    default:
                        alert("시스템 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
                }
                return;
            }

            if (!!res?.body.encryptedData) {
                openNicePopup(res?.body.encryptedData);
            } else {
                console.error("encryptedData not found.");
            }
        })
        .catch(() => {
            alert("시스템 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
        });
};

const openNicePopup = ({ encryptedData, integrityValue, tokenVersionId }) => {
    encDataRef.value.value = encryptedData;
    tokenVersionIdRef.value.value = tokenVersionId;
    integrityValueRef.value.value = integrityValue;

    const option =
        "width=500, height=550, top=100, left=100, fullscreen=no, menubar=no, status=no, toolbar=no, titlebar=yes, location=no, scrollbar=no";
    const win = window.open("https://nice.checkplus.co.kr/CheckPlusSafeModel/service.cb", "nicePopup", option);

    niceFormRef.value.action = "https://nice.checkplus.co.kr/CheckPlusSafeModel/service.cb";
    niceFormRef.value.target = "nicePopup";
    niceFormRef.value.submit();
    encDataRef.value.value = "";

    if (win !== null) {
        const interval = window.setInterval(function() {
            try {
                if (win.closed) {
                    window.clearInterval(interval);

                    const data = {
                        tokenVersionId: tokenVersionIdRef.value.value,
                        integrityValue: integrityValueRef.value.value,
                        encData: encDataRef.value.value
                    };
                    loginByNice(data);
                }
            } catch (e) {}
        }, 1000);

        return win;
    }
};

const loginByNice = data => {
    if (!data.encData) {
        alert("인증에 실패하였습니다. 다시 시도해주십시오.");
        return;
    }
    instance
        .post("/nice/v1/login", data)
        .then(res => {
            const statusCode = res?.status.statusCode;
            if (statusCode !== "C000") {
                switch (statusCode) {
                    default:
                        alert("시스템 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
                }
                return;
            }

            tokenStore().set(res?.body.tokenData);
            userStore().set(res?.body);
            getUserInfo(true);
        })
        .catch(() => {
            alert("시스템 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
        });
};

const getUserInfo = (isLogin = false) => {
    instance
        .get(`/users/v1/info`)
        .then(res => {
            const statusCode = res?.status.statusCode;
            if (statusCode !== "C000") {
                switch (statusCode) {
                    default:
                        alert("시스템 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
                }
                return;
            }

            const body = res?.body;

            userStore().set(body);
            signupInfoStore().set({
                name: body.name,
                birthdate: body.birthdate,
                genderType: body.genderType
            });

            switch (body.userStatusType) {
                case "PROFILE_REGISTRATION": // 프로필 등록 전
                case "WITHDRAWN": // 탈퇴
                    isLogin && router.push("/signup/guide");
                    break;
                case "ACTIVE": // 활동
                    router.push("/dashboard");
                    break;
                case "PROFILE_APPROVAL": // 프로필 승인 전
                case "DORMANT": // 휴면
                case "BLOCKED": // 블락
                case "REJECTED": // 반려
                default:
                    status.value = body.userStatusType;
                    break;
            }
        })
        .catch(() => {
            alert("시스템 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
        });
};

const onClickIntro = () => {
    router.push("/intro");
};

const status = ref("PROFILE_REGISTRATION");

onBeforeMount(() => {
    if (!tokenStore().isLogin()) {
        userStore().reset();
        tokenStore().reset();
        signupInfoStore().reset();
    } else {
        getUserInfo();
    }
});

const onClickKakao = () => {
    window.open("https://open.kakao.com/o/s3gwrOrg");
};

const onClickDormant = () => {
    alert("휴면 처리");
};
</script>

<template>
    <main-body background-color="#60E0E0" is-header is-navigation>
        <div class="view-layout">
            <div class="view-title">
                <plot-logo width="120" height="60" />
                <span style="">검증된 직장인을 위한 후불제 소개팅</span>
            </div>
            <div v-if="status === 'PROFILE_APPROVAL'" class="card-layout">
                <div class="card">
                    <p style="margin-top: 40px; margin-bottom: 20px;">등록하신 프로필을 심사중입니다.</p>
                    <p>12시간 내로 프로필 심사 결과가</p>
                    <p style="margin-bottom: 60px;">문자로 발송될 예정입니다.</p>
                    <v-btn class="card-btn" @click="onClickIntro">
                        PLOT 소개
                    </v-btn>
                </div>
            </div>
            <div v-else-if="status === 'BLOCKED'" class="card-layout">
                <div class="card">
                    <p>고객님은 서비스 이용이</p>
                    <p style="margin-bottom: 20px;">잠시 보류된 상태입니다.</p>
                    <img :src="kakaoTalkLogo" alt="" class="kakao-img" />
                    <p style="font-size: 16px;">보류된 자세한 이유는</p>
                    <p style="font-size: 16px; margin-bottom: 20px;">하단 버튼을 눌러 관리자에게 문의주세요</p>
                    <v-btn class="card-btn" @click="onClickKakao">
                        카톡 문의하러 가기
                    </v-btn>
                </div>
            </div>
            <div v-else-if="status === 'REJECTED'" class="card-layout">
                <div class="card">
                    <p>심사가 반려되었습니다.</p>
                    <p style="margin-bottom: 20px;">관리자에게 문의 부탁드립니다.</p>
                    <img :src="kakaoTalkLogo" alt="" class="kakao-img" />
                    <p style="font-size: 16px;">문자로 반려 사유를 전달드렸어요!</p>
                    <p style="font-size: 16px; margin-bottom: 20px;">보완해서 카톡으로 답장 부탁드려요 :)</p>
                    <v-btn class="card-btn" @click="onClickKakao">
                        카톡 문의하러 가기
                    </v-btn>
                </div>
            </div>
            <div v-else-if="status === 'DORMANT'" class="card-layout">
                <div class="card">
                    <p style="margin-top: 40px; margin-bottom: 20px;">현재 프로필 휴면 상태입니다</p>
                    <p>지금 바로 휴면을 해제하고</p>
                    <p style="margin-bottom: 20px;">새로운 인연 4명을 받아보세요.</p>
                    <p style="margin-bottom: 60px; font-weight: 400;">* 휴면 신청은 월 1회만 가능합니다</p>
                    <v-btn class="card-btn" @click="onClickDormant">
                        휴면 해제하기
                    </v-btn>
                </div>
            </div>
            <div v-else class="menu-layout">
                <v-btn class="menu-btn" @click="onClickStart">
                    START
                </v-btn>
                <v-btn class="menu-btn" @click="onClickIntro">
                    PLOT 소개
                </v-btn>
            </div>
        </div>
    </main-body>
    <form ref="niceFormRef" method="post">
        <input id="m" type="hidden" name="m" value="service" />
        <input id="token_version_id" ref="tokenVersionIdRef" type="hidden" name="token_version_id" />
        <input id="enc_data" ref="encDataRef" type="hidden" name="enc_data" />
        <input id="integrity_value" ref="integrityValueRef" type="hidden" name="integrity_value" />
    </form>
</template>

<style scoped>
.view-layout {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.view-title {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 28px;
    margin-bottom: 60px;
}

.view-title > span {
    font-size: 20px;
    letter-spacing: 0;
    color: white;
    text-align: center;
    font-weight: bold;
}

.card-layout {
    padding-inline: 36px;
    width: 100%;
}

.card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 24px;
    align-items: center;
    width: 100%;
    background-color: #ffffff;
    border-radius: 16px;
    box-shadow: 0px 4px 4px #00000040;
    font-size: 18px;
    font-weight: 700;
    color: #60e0e0;
    text-align: center;
    line-height: initial;
}

.kakao-img {
    width: 85px;
    height: 85px;
    margin-bottom: 20px;
}

.card-btn {
    width: 100%;
    height: 60px;
    box-shadow: 0px 4px 4px 0px #00000040;
    border-radius: 16px;
    font-weight: 700;
    font-size: 24px;
    letter-spacing: 0;
    background-color: #60e0e0;
    color: #ffffff;
}

.menu-layout {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
}

.menu-btn {
    width: 200px;
    height: 60px;
    box-shadow: 0px 4px 4px 0px #00000040;
    border-radius: 16px;
    font-weight: 700;
    font-size: 24px;
    letter-spacing: 0;
    color: #60e0e0;
}
</style>
