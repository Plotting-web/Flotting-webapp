<script setup>
import CarouselLeft from "@/components/icon/CarouselLeft.vue";
import ProfileImage from "@/components/image/ProfileImage.vue";
import CarouselRight from "@/components/icon/CarouselRight.vue";
import UserProfileNavigation from "@/components/profile/UserProfileNavigation.vue";
import {
    personalitiesOptions,
    getTitleByOptions,
    interestsOptions,
    occupationTypeOptions,
    residenceTypeOptions,
    datePreferenceTypeOptions
} from "@/views/signup/enum/options";
import { onBeforeMount, ref } from "vue";
import { instance } from "@/axios/axios";
import router from "@/router";
import { handleErrorAlerts } from "@/axios/common-api";

const props = defineProps({
    userId: {
        type: Number,
        default: 0
    },
    status: {
        type: String,
        default: "default" // default, self
    }
});

const profile = ref({
    profileImages: [""],
    managerImage: "",
    managerComment: "",
    occupationType: "",
    residenceType: "",
    height: 0,
    mbti: "",
    datePreferenceType: "",
    personalities: [],
    interests: [],
    lifestyle: "",
    messageToFuturePartner: ""
});

onBeforeMount(() => {
    const url = props.status === "self" ? `/users/v1/info` : `/profiles/v1/detail?userId=${props.userId}`;
    instance.get(url).then(res => {
        const statusCode = res?.status.statusCode;
        if (statusCode !== "C000") {
            handleErrorAlerts(statusCode);
            switch (statusCode) {
                case "U003":
                    router.back();
                    break;
            }
            return;
        }
        // TODO : API 정리되면 데이터 세팅 추가해야함.
    });
});
</script>

<template>
    <div class="prf-layout">
        <v-carousel height="auto" hide-delimiters>
            <template #prev="{ props }">
                <carousel-left @click="props.onClick"></carousel-left>
            </template>
            <template #next="{ props }">
                <carousel-right @click="props.onClick"></carousel-right>
            </template>
            <v-carousel-item v-for="(src, idx) in profile.profileImages" :key="`profile-item-${idx}`">
                <profile-image :src="src" />
            </v-carousel-item>
        </v-carousel>
        <div class="prf-manager-comment-layout">
            <div class="prf-manager-title-layout">
                <div class="prf-manager-title-img" :style="`background-image: url(${profile.managerImage})`"></div>
                <span class="prf-manager-title-text">
                    매니저의 코멘트를 살펴보세요 !
                </span>
            </div>
            <div class="prf-manager-comment-text">
                {{ profile.managerComment }}
            </div>
        </div>
        <div class="prf-main-layout">
            <div class="prf-main-1-layout">
                <div class="prf-main-1-icon-layout">
                    <v-icon icon="mdi-account-circle" size="30" />
                    <span class="prf-main-1-text">{{ getTitleByOptions(occupationTypeOptions, profile.occupationType) }}</span>
                </div>
                <div class="prf-main-1-icon-layout">
                    <v-icon icon="mdi-map-marker-radius" size="30" />
                    <span class="prf-main-1-text">{{ getTitleByOptions(residenceTypeOptions, profile.residenceType) }}</span>
                </div>
                <div class="prf-main-1-icon-layout">
                    <v-icon icon="mdi-format-list-bulleted" size="30" />
                    <span class="prf-main-1-text">{{ !!profile.height ? `${profile.height}CM` : "" }}</span>
                </div>
            </div>
            <div class="prf-main-2-layout">
                <div class="prf-main-2-title">
                    나를 표현하는 모든 키워드
                </div>
                <div class="prf-main-2-content">
                    <div class="prf-main-2-row">
                        <div v-show="!!profile.mbti" class="prf-main-2-item" style="width: auto;">
                            {{ profile.mbti }}
                        </div>
                        <div v-show="!!profile.datePreferenceType" class="prf-main-2-item">
                            {{ getTitleByOptions(datePreferenceTypeOptions, profile.datePreferenceType) }}
                        </div>
                    </div>
                    <div class="prf-main-2-row">
                        <div v-for="(val, idx) in profile.personalities" :key="`profile-character-${idx}`" class="prf-main-2-item">
                            {{ getTitleByOptions(personalitiesOptions, val) }}
                        </div>
                    </div>
                    <div class="prf-main-2-row">
                        <div v-for="(val, idx) in profile.interests" :key="`profile-hobby-${idx}`" class="prf-main-2-item">
                            {{ getTitleByOptions(interestsOptions, val) }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="prf-main-3-layout">
                <div class="prf-main-3-title">
                    내가 하는 일 혹은 나의 라이프 스타일
                </div>
                <div class="prf-main-3-divider" />
                <div class="prf-main-3-text">
                    {{ profile.lifestyle }}
                </div>
                <div class="prf-main-4-title">
                    나의 미래 연인에게 하고싶은 말
                </div>
                <div class="prf-main-4-divider" />
                <div class="prf-main-4-text">
                    {{ profile.messageToFuturePartner }}
                </div>
            </div>
        </div>
        <div style="display: flex; flex-direction: column; gap: 10px;">
            <user-profile-navigation :status="status" :user-id="userId" />
        </div>
    </div>
</template>

<style scoped>
.prf-layout {
    display: flex;
    flex-direction: column;
    padding: 24px;
    gap: 24px;
}

.v-carousel {
    width: 100%;
    box-shadow: 4px 4px 10px 0 #60e0e0;
}

.prf-manager-comment-layout {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    box-shadow: 4px 4px 10px 0 #60e0e0;
    border-radius: 16px;
    padding: 13px 20px;
}

.prf-manager-title-layout {
    width: 100%;
    display: flex;
    gap: 10px;
    justify-content: left;
    align-items: center;
}

.prf-manager-title-img {
    width: 70px;
    min-width: 70px;
    height: 70px;
    background-color: #f1f1f1;
    border-radius: 70px;
    background-size: cover;
    background-position: 50%;
}

.prf-manager-title-text {
    font-weight: 800;
    font-size: 15px;
}

.prf-manager-comment-text {
    width: 100%;
    background-color: #f1f1f1;
    border-radius: 16px;
    padding: 12px 24px;
    font-weight: 700;
    font-size: 14px;
}

.prf-main-layout {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 16px;
    gap: 44px;
    box-shadow: 4px 4px 10px 0 #60e0e0;
    border-radius: 16px;
}

.prf-main-1-layout {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 21px 30px;
    gap: 10px;
    background: #f1f1f1;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
}

.prf-main-1-icon-layout {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 7px;
}

.prf-main-1-text {
    font-weight: 300;
    font-size: 16px;
}

.prf-main-2-layout {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.prf-main-2-title {
    width: 100%;
    text-align: center;
    background-color: #60e0e0;
    border-radius: 16px;
    color: #ffffff;
    padding-block: 10px;
    font-weight: 700;
    font-size: 17px;
    box-shadow: 0px 4px 4px 0px #00000040;
}

.prf-main-2-content {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    align-items: center;
    padding-inline: 20px;
    gap: 8px;
}

.prf-main-2-row {
    width: 100%;
    display: flex;
    gap: 8px;
}

.prf-main-2-item {
    width: 100%;
    text-align: center;
    box-sizing: border-box;
    background: rgba(96, 224, 224, 0.55);
    border: 2px solid #60e0e0;
    border-radius: 10px;
    font-size: 14px;
    font-weight: 700;
    padding: 2px 10px;
}

.prf-main-3-layout {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 22px;
}

.prf-main-3-title {
    width: 100%;
    text-align: center;
    background-color: #60e0e0;
    border-radius: 16px;
    color: #ffffff;
    padding-block: 10px;
    font-weight: 700;
    font-size: 17px;
    box-shadow: 0px 4px 4px 0px #00000040;
}

.prf-main-3-divider {
    width: 100%;
    height: 5px;
    background: #60e0e0;
    border-radius: 16px;
}

.prf-main-3-text {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 158px;
    background: #f1f1f1;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
    padding: 19px 28px;
    font-size: 14px;
    font-weight: 700;
}

.prf-main-4-title {
    width: 100%;
    text-align: center;
    background-color: #60e0e0;
    border-radius: 16px;
    color: #ffffff;
    padding-block: 10px;
    font-weight: 700;
    font-size: 17px;
    box-shadow: 0px 4px 4px 0px #00000040;
}

.prf-main-4-divider {
    width: 100%;
    height: 5px;
    background: #60e0e0;
    border-radius: 16px;
}

.prf-main-4-text {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 158px;
    background: #f1f1f1;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
    padding: 19px 28px;
    font-size: 14px;
    font-weight: 700;
}
</style>
