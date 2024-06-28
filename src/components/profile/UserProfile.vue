<script setup>
import CarouselLeft from "@/components/icon/CarouselLeft.vue";
import ProfileImage from "@/components/image/ProfileImage.vue";
import CarouselRight from "@/components/icon/CarouselRight.vue";
import UserProfileNavigation from "@/components/profile/UserProfileNavigation.vue";
import { characterOptions, getTitleByOptions, hobbyOptions, jobOptions, locationOptions, preferredDateOptions } from "@/views/signup/enum/options";

defineProps({
    status: {
        type: String,
        default: "default" // default, sending, pending, success, fail, self
    },
    profileImages: {
        type: Array,
        default: () => [
            "https://image.fnnews.com/resource/media/image/2023/12/16/202312160703001203_l.jpg",
            "https://i.namu.wiki/i/VE44Pr9Xrqrinf43GS7Yu945HyT3XyKWhmisPJcZ6qaCqV9J4oLnpUOHSrY-rjBh8j6ZI-3KtYkNf9x8sBe0Ew.webp",
            "https://cdn.k-trendynews.com/news/photo/202312/162732_242532_2228.jpg"
        ]
    },
    managerImage: {
        type: String,
        default: "https://image.kr.canon/pds/gallery/open/1257249062209_0d8F3Kb90P.jpg"
    },
    managerComment: {
        type: String,
        default:
            "아담하면서도 볼륨있는 몸매 라인과 맑고 큰 눈이 돋보이는 여성 회원입니다. 또래에 비해 성숙한 사고와 뛰어난 공감 능력을 갖춘 다양한 매력을 가진 분입니다."
    },
    job: {
        type: String,
        default: "MINOR_COMPANY"
    },
    location: {
        type: String,
        default: "SEOUL_SOUTH"
    },
    height: {
        type: Number,
        default: 155
    },
    mbti: {
        type: String,
        default: "ENFP"
    },
    preferredDate: {
        type: String,
        default: "일주일에 1~2 번 데이트"
    },
    characters: {
        type: Array,
        default: () => ["EXTROVERTED", "CUTE", "HUMOROUS"]
    },
    hobbes: {
        type: Array,
        default: () => ["EXERCISE", "SELF_IMPROVEMENT", "READING"]
    },
    lifeStyle: {
        type: String,
        default:
            "저는 병원에서 해외 국가들을 대상으로 마케팅을 하는 업무를 하고 있습니다. 성인이 되서 바로 경제적으로 독립해서 살고 있어서 또래들보다 철이 빨리 들었다는 이야기를 많이 들어요 ! 독립해서 살고 있어서 또래들보다 철이 빨리 들었다는 이야기를 많이 들어요 !"
    },
    somethingWantToSay: {
        type: String,
        default:
            "저랑 잘 맞는 분을 만나게 된다면 퇴근 후 데이트나, 드라이브, 주말엔 종종 글램핑도 가고싶어요 :D 그리고 하고싶은 것도 많아서 이야기 하다보면 같이 가고 싶어지실꺼에요 ㅎ"
    }
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
            <v-carousel-item v-for="(src, idx) in profileImages" :key="`profile-item-${idx}`">
                <profile-image :src="src" />
            </v-carousel-item>
        </v-carousel>
        <div class="prf-manager-comment-layout">
            <div class="prf-manager-title-layout">
                <div class="prf-manager-title-img" :style="`background-image: url(${managerImage})`"></div>
                <span class="prf-manager-title-text">
                    매니저의 코멘트를 살펴보세요 !
                </span>
            </div>
            <div class="prf-manager-comment-text">
                {{ managerComment }}
            </div>
        </div>
        <div class="prf-main-layout">
            <div class="prf-main-1-layout">
                <div class="prf-main-1-icon-layout">
                    <v-icon icon="mdi-account-circle" size="30" />
                    <span class="prf-main-1-text">{{ getTitleByOptions(jobOptions, job) }}</span>
                </div>
                <div class="prf-main-1-icon-layout">
                    <v-icon icon="mdi-map-marker-radius" size="30" />
                    <span class="prf-main-1-text">{{ getTitleByOptions(locationOptions, location) }}</span>
                </div>
                <div class="prf-main-1-icon-layout">
                    <v-icon icon="mdi-format-list-bulleted" size="30" />
                    <span class="prf-main-1-text">{{ height }}CM</span>
                </div>
            </div>
            <div class="prf-main-2-layout">
                <div class="prf-main-2-title">
                    나를 표현하는 모든 키워드
                </div>
                <div class="prf-main-2-content">
                    <div class="prf-main-2-row">
                        <div class="prf-main-2-item" style="width: auto;">
                            {{ mbti }}
                        </div>
                        <div class="prf-main-2-item">
                            {{ preferredDate }}
                        </div>
                    </div>
                    <div class="prf-main-2-row">
                        <div v-for="(val, idx) in characters" :key="`profile-character-${idx}`" class="prf-main-2-item">
                            {{ getTitleByOptions(characterOptions, val) }}
                        </div>
                    </div>
                    <div class="prf-main-2-row">
                        <div v-for="(val, idx) in hobbes" :key="`profile-hobby-${idx}`" class="prf-main-2-item">
                            {{ getTitleByOptions(hobbyOptions, val) }}
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
                    {{ lifeStyle }}
                </div>
                <div class="prf-main-4-title">
                    나의 미래 연인에게 하고싶은 말
                </div>
                <div class="prf-main-4-divider" />
                <div class="prf-main-4-text">
                    {{ somethingWantToSay }}
                </div>
            </div>
        </div>
        <div style="display: flex; flex-direction: column; gap: 10px;">
            <user-profile-navigation :status="status" />
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
