<script setup>
import MainHeader from "@/components/layout/MainHeader.vue";
import { onBeforeMount, ref } from "vue";
import router from "@/router";
import SignupProgress from "@/views/signup/components/SignupProgress.vue";
import { signupInfoStore } from "@/views/signup/store/singupInfoStore";
import { storeToRefs } from "pinia";
import MainBody from "@/components/layout/MainBody.vue";
import { setUserInfo } from "@/axios/common-api";

onBeforeMount(() => setUserInfo(true, true));

const store = signupInfoStore();
const { lifestyle, messageToFuturePartner } = storeToRefs(store);
const form = ref();

const rules = [
    value => !!value || "필수 값 입니다.",
    value => String(value).length >= 60 || "60 글자 이상",
    value => String(value).length <= 150 || "150 글자 이하"
];
const onClicked = async () => {
    const { valid } = await form.value.validate();

    if (!valid) {
        alert("모든 질문에 대해 60자 ~ 150자 사이로 답변해주세요.");
        return;
    }
    await router.push("/signup/3");
};
</script>

<template>
    <main-header start="back" />
    <main-body is-header>
        <div class="w-100 d-flex flex-column justify-center align-center" style="padding: 29px 18px;">
            <signup-progress :idx="2" />
            <div class="w-100 d-flex flex-column ga-3 page-guide">
                <span class="text-none page-title">소중한 나의 세계관을 보여주세요 !</span>
                <div class="d-flex flex-column ga-1">
                    <span class="text-none page-sub">문항 별 1가지 질문만 선택하여 답변해주세요.</span>
                    <span class="text-none page-sub">자세하게 작성할수록 매칭 확률이 높아집니다 :)</span>
                </div>
            </div>
            <v-form ref="form">
                <div class="d-flex flex-column w-100 ga-6 mb-8">
                    <div class="d-flex flex-column ga-3">
                        <span class="text-none title-text">(1) 내가 하는 일 혹은 나의 라이프 스타일</span>
                        <div class="d-flex flex-column ga-1">
                            <span class="text-none sub-title">- 지금 하고 있는 일은 어떤 일인가요?</span>
                            <span class="text-none sub-title">- 지금 하는 일을 선택한 이유는 무엇인가요?</span>
                            <span class="text-none sub-title">- 내가 가장 즐겨하는 취미 1가지를 얘기해주세요!</span>
                        </div>
                        <v-textarea
                            v-model="lifestyle"
                            class="text-none textarea-text"
                            rows="5"
                            auto-grow
                            variant="plain"
                            placeholder="최소 60자 이상 작성해주세요."
                            :rules="rules"
                            counter="60"
                        />
                    </div>
                    <div class="d-flex flex-column ga-3">
                        <span class="text-none title-text">(2) 나의 미래 연인에게 하고 싶은 말</span>
                        <div class="d-flex flex-column ga-1">
                            <span class="text-none sub-title">- 타인에게 주로 듣는 나의 외모 칭찬은?</span>
                            <span class="text-none sub-title">- 미래 연인에게 어필하는 나의 장점은?</span>
                            <span class="text-none sub-title">- 나의 연애 가치관은? 혹은 하고 싶은 데이트?</span>
                        </div>
                        <v-textarea
                            v-model="messageToFuturePartner"
                            class="text-none textarea-text"
                            rows="5"
                            auto-grow
                            variant="plain"
                            placeholder="최소 60자 이상 작성해주세요."
                            :rules="rules"
                            counter="60"
                        />
                    </div>
                </div>
            </v-form>
            <div class="d-flex flex-column text-none security-text mb-9">
                <span>수집된 개인정보는</span>
                <span>매칭 외 다른 용도로 활용되지 않습니다.</span>
            </div>
            <div>
                <v-btn class="text-none bottom-btn" @click="onClicked">취향 등록하러 가기</v-btn>
            </div>
        </div>
    </main-body>
</template>

<style scoped>
.page-guide {
    box-shadow: 4px 4px 10px 0px #60e0e0;
    border-radius: 16px;
    padding: 18px 8px;
    margin-bottom: 30px;
}

.page-title {
    letter-spacing: 0;
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    text-align: center;
}

.page-sub {
    letter-spacing: 0;
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    text-align: center;
}

.title-text {
    letter-spacing: 0;
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
    text-align: left;
}

.textarea-text {
    border: 2px solid #b6b6b6;
    border-radius: 12px;
    letter-spacing: 0;
    font-size: 12px;
    font-weight: 700;
    line-height: 20px;
    text-align: left;
    padding: 0 12px 8px 12px;
}

.sub-title {
    letter-spacing: 0;
    color: #35a8aa;
    font-size: 12px;
    font-weight: 700;
    line-height: 15px;
    text-align: left;
}

.security-text {
    color: #2f9c9e;
    letter-spacing: 0;
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    text-align: center;
}

.bottom-btn {
    width: 316px;
    height: 58px;
    padding-inline: 49px;
    border-radius: 16px;
    border: 1px solid #dfdfdf;
    box-shadow: 0px 4px 4px 0px #00000040;
    font-size: 24px;
    font-weight: 700;
    line-height: 29px;
    text-align: center;
    color: #ffffff;
    background: #60e0e0;
    letter-spacing: 0;
    margin-bottom: 30px;
}
</style>
