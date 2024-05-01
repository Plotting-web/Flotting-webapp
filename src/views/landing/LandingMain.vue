<script setup>
import router from "@/router";
import { userInfoStore } from "@/store/user/userInfoStore";
import { fetchApiResource } from "@/axios/commonApi";
import { onMounted, ref } from "vue";

const onClickStart = () => {
    router.push("/login");
};
const onClickIntro = () => {
    router.push("/intro");
};
const onClickSignUp = () => {
    router.push("/signupTest");
};
const onClickLogin = () => {
    router.push("/login");
};

const userInfo = userInfoStore();
const status = ref("");

onMounted(() => {
    if (!userInfo.isValid()) return;
    fetchApiResource(`user/info/${userInfo.getUserNo()}`, "GET")
        .then(response => {
            const { data } = response;
            switch (data.userStatus) {
                case "NORMAL": // 프로필 등록이 승인된 유저
                    router.push("/dashboard");
                    break;
                case "NONE": // 프로필 등록이 안된 유저
                case "REJECT": // 프로필 등록이 반려된 유저
                    router.push("/signup/guide");
                    break;
                default:
                    status.value = data.userStatus;
            }
        })
        .catch(error => {
            console.error(error);
        });
});

/**
 * NONE("승인전&카카오로그인만"),INPROGRESS("프로필등록완료&승인전"), REJECT("반려"),
 *     WITHDRAWAL("탈퇴"), DORMANT("휴면"), NORMAL("활성"), FORCED_WITHDRAWAL("강제탈퇴");
 */
</script>

<template>
    <div class="w-100 h-100">
        <div
            class="mx-auto h-100 d-flex flex-column justify-space-between"
            style="max-width: 390px; min-width: 360px; background-color: #60E0E0; padding-top: 150px; padding-bottom: 80px;"
        >
            <div class="w-100 d-flex justify-center flex-column" style="gap: 27px; margin-bottom: 60px;">
                <span class="font-weight-bold text-center text-white" style="font-size: 50px; letter-spacing: 0;">Plotting</span>
                <span class="font-weight-bold text-center text-white" style="font-size: 20px; letter-spacing: 0;"
                    >둘 사이에 새로운 줄거리를 만들다</span
                >
            </div>
            <div v-if="status === 'INPROGRESS'" style="padding-inline: 36px; width:100%;">
                <div
                    style="display: flex; flex-direction: column; justify-content: center; padding-top: 93px; padding-bottom: 42px; align-items: center; width: 100%; background-color: #FFFFFF; border-radius: 16px;"
                >
                    <div style="font-size: 18px; font-weight: 700; color: #60E0E0; text-align: center; margin-bottom: 60px;">
                        <p>등록해주신 프로필을 심사중입니다.</p>
                        <br />
                        <p>24시간 내로 프로필 심사 결과가</p>
                        <p>문자로 발송될 예정입니다.</p>
                    </div>
                    <v-btn
                        style="width: 238px; height: 60px; box-shadow: 0px 4px 4px 0px #00000040; border-radius: 16px; font-weight: 700; font-size: 24px; letter-spacing: 0; background-color: #60E0E0; color:#FFFFFF;"
                        @click="onClickIntro"
                    >
                        플러팅 소개
                    </v-btn>
                </div>
            </div>
            <div v-else class="w-100 d-flex flex-column justify-center align-center ga-4">
                <v-btn
                    style="width: 200px; height: 60px; box-shadow: 0px 4px 4px 0px #00000040; border-radius: 16px; font-weight: 700; font-size: 24px; letter-spacing: 0; color: #60E0E0;"
                    @click="onClickSignUp"
                >
                    회원가입(테스트용)
                </v-btn>
                <v-btn
                    style="width: 200px; height: 60px; box-shadow: 0px 4px 4px 0px #00000040; border-radius: 16px; font-weight: 700; font-size: 24px; letter-spacing: 0; color: #60E0E0;"
                    @click="onClickLogin"
                >
                    로그인(테스트용)
                </v-btn>
                <v-btn
                    style="width: 200px; height: 60px; box-shadow: 0px 4px 4px 0px #00000040; border-radius: 16px; font-weight: 700; font-size: 24px; letter-spacing: 0; color: #60E0E0;"
                    @click="onClickStart"
                >
                    START
                </v-btn>
                <v-btn
                    style="width: 200px; height: 60px; box-shadow: 0px 4px 4px 0px #00000040; border-radius: 16px; font-weight: 700; font-size: 24px; letter-spacing: 0; color: #60E0E0;"
                    @click="onClickIntro"
                >
                    플러팅 소개
                </v-btn>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
