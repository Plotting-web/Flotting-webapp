<script setup>
import router from "@/router";
import { onMounted, ref } from "vue";
import PlotLogo from "@/components/icon/PlotLogo.vue";
import MainBody from "@/components/layout/MainBody.vue";
import kakaoTalkLogo from "@/images/KakaoTalkLogo.png";
import { loginStore } from "@/store/loginStore";
import axios from "axios";

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

const loginInfo = loginStore();
const status = ref("NONE");

onMounted(() => {
    if (!loginInfo.isLogin()) {
        return;
    }

    axios
        .get(`user/info/${loginInfo.getUserNo()}`)
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

const onClickKakao = () => {
    alert("카카오톡 이동");
};

const onClickDormant = () => {};

/**
 *  NONE("승인전&카카오로그인만"),INPROGRESS("프로필등록완료&승인전"), REJECT("반려"), DORMANT("휴면"), NORMAL("활성"), FORCED_WITHDRAWAL("강제탈퇴");
 */
</script>

<template>
    <main-body background-color="#60E0E0" is-header is-navigation>
        <div class="view-layout">
            <div class="view-title">
                <plot-logo width="120" height="60" />
                <span style="">검증된 직장인을 위한 후불제 소개팅</span>
            </div>
            <div v-if="status === 'INPROGRESS'" class="card-layout">
                <div class="card">
                    <p style="margin-top: 40px; margin-bottom: 20px;">등록하신 프로필을 심사중입니다.</p>
                    <p>12시간 내로 프로필 심사 결과가</p>
                    <p style="margin-bottom: 60px;">문자로 발송될 예정입니다.</p>
                    <v-btn class="card-btn" @click="onClickIntro">
                        PLOT 소개
                    </v-btn>
                </div>
            </div>
            <div v-else-if="status === 'FORCED_WITHDRAWAL'" class="card-layout">
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
            <div v-else-if="status === 'REJECT'" class="card-layout">
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
                <!-- <v-btn class="menu-btn" @click="onClickSignUp">
                    회원가입(테스트용)
                </v-btn>
                <v-btn class="menu-btn" @click="onClickLogin">
                    로그인(테스트용)
                </v-btn> -->
                <v-btn class="menu-btn" @click="onClickStart">
                    START
                </v-btn>
                <v-btn class="menu-btn" @click="onClickIntro">
                    PLOT 소개
                </v-btn>
            </div>
        </div>
    </main-body>
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
