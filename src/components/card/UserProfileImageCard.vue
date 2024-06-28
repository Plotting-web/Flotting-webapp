<script setup>
import ProfileImage from "@/components/image/ProfileImage.vue";

defineProps({
    to: {
        type: String,
        default: "#"
    },
    info: {
        type: Object,
        default: null
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
    title: {
        type: String,
        default: "원빈, 20"
    },
    subTitle: {
        type: String,
        default: "가수, 서울 강남구"
    },
    src: {
        type: String,
        default: "https://image.fnnews.com/resource/media/image/2023/12/16/202312160703001203_l.jpg"
    }
});
</script>

<template>
    <v-card :to="to" class="user-prf-img-card">
        <div class="user-prf-img-card-layout">
            <div class="user-prf-img-card-manager-img" :style="`background-image: url(${managerImage})`" />
            <div class="user-prf-img-card-manager-comment">
                <p class="user-prf-img-card-manager-comment-text">
                    {{ managerComment }}
                </p>
            </div>
            <profile-image radius :title="title" :sub-title="subTitle" :src="src" />
        </div>
    </v-card>
</template>

<style scoped>
.user-prf-img-card {
    width: 100%;
    box-shadow: 4px 4px 10px 0px #60e0e0;
    border-radius: 16px;
}
.user-prf-img-card-layout {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 16px;
    gap: 16px;
}
.user-prf-img-card-manager-img {
    width: 98px;
    height: 98px;
    border-radius: 16px;
    background-color: #f1f1f1;
    background-size: cover;
    background-position: 50%;
}
.user-prf-img-card-manager-comment {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 64px;
    background: #f1f1f1;
    border-radius: 16px;
    padding-inline: 16px;
}
.user-prf-img-card-manager-comment-text {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-weight: 700;
    font-size: 13px;
    color: rgba(0, 0, 0, 0.7);
}
</style>
