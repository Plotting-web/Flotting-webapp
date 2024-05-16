<script setup>
import router from "@/router";
import { userInfoStore } from "@/store/user/userInfoStore";
import { onMounted, ref } from "vue";
import { createInstance } from "@/axios/axios";
import PlotLogo from "@/components/icon/PlotLogo.vue";
import MainBody from "@/components/layout/MainBody.vue";

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
    router.push("/login/temp");
};

const userInfo = userInfoStore();
const status = ref("");

onMounted(() => {
    if (!userInfo.isValid()) {
        return;
    }
    createInstance
        .get(`user/info/${userInfo.getUserNo()}`)
        .then(response => {
            const { data } = response;
            switch (data.userStatus) {
                case "NORMAL": // 프로필 등록이 승인된 유저
                    router.push("/dashboard");
                    break;
                case null:
                case "NONE": // 프로필 등록이 안된 유저
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
 *  NONE("승인전&카카오로그인만"),INPROGRESS("프로필등록완료&승인전"), REJECT("반려"), DORMANT("휴면"), NORMAL("활성"), FORCED_WITHDRAWAL("강제탈퇴");
 */
</script>

<template>
    <main-body background-color="#60E0E0">
        <div class="d1">
            <div class="d2">
                <plot-logo width="120" height="60" />
                <span style="">검증된 직장인을 위한 후불제 소개팅</span>
            </div>
            <div v-if="['INPROGRESS', 'REJECT', 'FORCED_WITHDRAWAL'].includes(status)" class="d3">
                <div>
                    <div class="d3-1">
                        <p>등록해주신 프로필을 심사중입니다.</p>
                        <br />
                        <p>12시간 내로 프로필 심사 결과가</p>
                        <p>문자로 발송될 예정입니다.</p>
                    </div>
                    <v-btn class="d3-btn" @click="onClickIntro">
                        PLOT 소개
                    </v-btn>
                </div>
            </div>
            <div v-else class="d4">
                <v-btn @click="onClickSignUp">
                    회원가입(테스트용)
                </v-btn>
                <v-btn @click="onClickLogin">
                    로그인(테스트용)
                </v-btn>
                <v-btn @click="onClickStart">
                    START
                </v-btn>
                <v-btn @click="onClickIntro">
                    PLOT 소개
                </v-btn>
            </div>
        </div>
    </main-body>
</template>

<style scoped>
.d1 {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 60px;
    padding-bottom: 80px;
}

.d2 {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 28px;
    margin-bottom: 60px;
}

.d2 span {
    font-size: 20px;
    letter-spacing: 0;
    color: white;
    text-align: center;
    font-weight: bold;
}

.d3 {
    padding-inline: 36px;
    width: 100%;
}

.d3 > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 93px;
    padding-bottom: 42px;
    align-items: center;
    width: 100%;
    background-color: #ffffff;
    border-radius: 16px;
    box-shadow: 0px 4px 4px #00000040;
}

.d3-1 {
    font-size: 18px;
    font-weight: 700;
    color: #60e0e0;
    text-align: center;
    margin-bottom: 60px;
}

.d3-btn {
    width: 240px;
    height: 60px;
    box-shadow: 0px 4px 4px 0px #00000040;
    border-radius: 16px;
    font-weight: 700;
    font-size: 24px;
    letter-spacing: 0;
    background-color: #60e0e0;
    color: #ffffff;
}

.d4 {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
}

.d4 > button {
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
