<script setup>
import MainHeader from "@/components/layout/MainHeader.vue";
import { onBeforeMount, ref } from "vue";
import router from "@/router";
import SignupProgress from "@/views/signup/components/SignupProgress.vue";
import SignupRadio from "@/views/signup/components/SignupRadio.vue";
import { signupInfoStore } from "@/views/signup/store/singupInfoStore";
import { storeToRefs } from "pinia";
import { inflowPathOptions, genderTypeOptions, residenceTypeOptions } from "@/views/signup/enum/options";
import MainBody from "@/components/layout/MainBody.vue";
import { setUserInfo } from "@/axios/common-api";

const store = signupInfoStore();
const { name, birthdate, height, genderType, residenceType, detailResidence, inflowPath, referralCode } = storeToRefs(store);
const form = ref();

onBeforeMount(() => setUserInfo(true, true));

const onClickedDone = async () => {
    const { valid } = await form.value.validate();

    const radioValid = genderType.value !== "" && residenceType.value !== "" && inflowPath.value !== "";

    if (!valid || !radioValid) {
        alert("1 ~ 6번까지 모든 문항을 입력해주세요!");
        return;
    }

    await router.push("/signup/2");
};

const nameRules = [value => !!value || "필수 값 입니다.", value => value.length >= 2 || "2 글자 이상", value => value.length <= 10 || "10 글자 이하"];

const birthdateRules = [
    value => !!value || "필수 값 입니다.",
    value => /[0-9]/.test(value) || "숫자만 입력해주세요.",
    value => value.length === 6 || "YYMMDD",
    value => /(?:\d{2})(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])$/.test(value) || "잘못된 형식 입니다."
];

const detailResidenceRules = [
    value => !!value || "필수 값 입니다.",
    value => /[^0-9]/.test(value) || "글자만 입력해주세요.",
    value => value.length <= 10 || "10 글자 이하로 입력해주세요."
];
</script>

<template>
    <main-header start="back" />
    <main-body is-header>
        <v-form ref="form">
            <div class="w-100 d-flex flex-column justify-center align-center" style="padding: 29px 18px;">
                <signup-progress :idx="1" />
                <div class="d-flex flex-column w-100 ga-6 mb-8">
                    <div class="d-flex flex-column">
                        <span class="text-none title-text">(1) 본인 성함</span>
                        <v-text-field
                            v-model="name"
                            class="text-none input-text"
                            placeholder="최연아"
                            variant="underlined"
                            :clearable="true"
                            :rules="nameRules"
                            counter="10"
                            disabled
                        ></v-text-field>
                    </div>
                    <div class="d-flex flex-column">
                        <span class="text-none title-text">(2) 생년월일</span>
                        <v-text-field
                            v-model="birthdate"
                            class="text-none input-text"
                            placeholder="20010830"
                            variant="underlined"
                            :clearable="true"
                            disabled
                        ></v-text-field>
                    </div>
                    <div class="d-flex flex-column ga-2">
                        <div class="d-flex justify-space-between">
                            <span class="text-none title-text">(3) 본인 신장</span>
                            <span class="text-none title-text">{{ height }}</span>
                        </div>
                        <span class="text-none caution">* 허위 작성 시 서비스 이용 제지 사유</span>
                        <div>
                            <v-slider v-model="height" min="140" max="200" :step="1" thumb-label color="#60E0E0" hide-details>
                                <template #thumb-label="{modelValue}"> {{ modelValue }}</template>
                            </v-slider>
                            <div class="d-flex w-100 justify-space-between">
                                <span class="text-none slider-text">140</span>
                                <span class="text-none slider-text">200</span>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex flex-column ga-3">
                        <span class="text-none title-text">(4) 본인 성별</span>
                        <div style="display: grid; grid-template-columns: repeat(2, 1fr); grid-gap: 8px;">
                            <signup-radio
                                v-for="({ value, title }, i) in genderTypeOptions"
                                :key="`gen_${i}`"
                                :group-value="genderType"
                                :value="value"
                                :title="title"
                                disabled
                                @click="val => (genderType = val)"
                            />
                        </div>
                    </div>
                    <div class="d-flex flex-column ga-3">
                        <span class="text-none title-text">(5-1) 본인 거주지</span>
                        <div style="display: grid; grid-template-columns: repeat(3, 1fr); grid-gap: 8px;">
                            <signup-radio
                                v-for="({ value, title }, i) in residenceTypeOptions"
                                :key="`loc_${i}`"
                                :group-value="residenceType"
                                :value="value"
                                :title="title"
                                @click="val => (residenceType = val)"
                            />
                        </div>
                    </div>
                    <div class="d-flex flex-column ga-2">
                        <span class="text-none title-text">(5-2) 본인 상세 거주지</span>
                        <span class="sub-title">- 상세 주소 입력 시 00시 00구 까지 입력</span>
                        <v-text-field
                            v-model="detailResidence"
                            class="text-none input-text"
                            placeholder="서울시 서초구"
                            variant="underlined"
                            :clearable="true"
                            counter="10"
                            :rules="detailResidenceRules"
                        ></v-text-field>
                    </div>
                    <div class="d-flex flex-column ga-3">
                        <span class="text-none title-text">(6) 신청 경로</span>
                        <div style="display: grid; grid-template-columns: repeat(3, 1fr); grid-gap: 8px;">
                            <signup-radio
                                v-for="({ value, title }, i) in inflowPathOptions"
                                :key="`applied_${i}`"
                                :group-value="inflowPath"
                                :value="value"
                                :title="title"
                                @click="val => (inflowPath = val)"
                            />
                        </div>
                    </div>
                    <div class="d-flex flex-column ga-3">
                        <span class="text-none title-text">(7) 추천인 성함</span>
                        <v-text-field
                            v-model="referralCode"
                            class="text-none input-text"
                            density="compact"
                            placeholder="예시 ) 진수현"
                            variant="plain"
                            hide-details
                            :clearable="true"
                        ></v-text-field>
                    </div>
                </div>
                <div class="d-flex flex-column text-none security-text mb-9">
                    <span>수집된 개인정보는</span>
                    <span>매칭 외 다른 용도로 활용되지 않습니다.</span>
                </div>
                <div>
                    <v-btn class="text-none bottom-btn" @click="onClickedDone">세계관 등록하러 가기</v-btn>
                </div>
            </div>
        </v-form>
    </main-body>
</template>

<style scoped>
.title-text {
    letter-spacing: 0;
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
    text-align: left;
}

.input-text {
    height: fit-content;
    letter-spacing: 0;
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    text-align: left;
}

.caution {
    font-size: 12px;
    font-weight: 800;
    line-height: 15px;
    text-align: left;
    color: #f23030;
    letter-spacing: 0;
}

.radio {
    width: 100%;
    height: 48px;
    border: 2px solid #00000066;
    border-radius: 8px;
    background: #ffffff99;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    text-align: center;
    cursor: pointer;
}

.radio-clicked {
    border: 2px solid #60e0e0;
    background: #60e0e08c;
}

.slider-text {
    letter-spacing: 0;
    font-size: 11px;
    font-weight: 700;
    line-height: 13px;
    text-align: center;
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

.sub-title {
    letter-spacing: 0;
    color: #35a8aa;
    font-size: 12px;
    font-weight: 700;
    line-height: 15px;
    text-align: left;
}
</style>
