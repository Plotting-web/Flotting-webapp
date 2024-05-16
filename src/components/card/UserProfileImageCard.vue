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
    }
});
</script>

<template>
    <v-card
        width="100%"
        :to="to"
        style="
            box-shadow: 4px 4px 10px 0px #60e0e0;
            border-radius: 16px;
        "
    >
        <div
            style="
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width: 100%;
                padding: 16px;
                gap: 16px;
            "
        >
            <div
                style="
                    width: 98px;
                    height: 98px;
                    border-radius: 16px;
                    background-color: #f1f1f1;
                    background-size: cover;
                    background-position: 50%;
                "
                :style="`background-image: url(https://image.kr.canon/pds/gallery/open/1257249062209_0d8F3Kb90P.jpg)`"
            />
            <div
                style="
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    height: 64px;
                    background: #f1f1f1;
                    border-radius: 16px;
                "
            >
                매니저 코멘트
            </div>
            <profile-image
                title="원빈, 20"
                sub-title="가수, 서울 강남구"
                radius
                src="https://image.fnnews.com/resource/media/image/2023/12/16/202312160703001203_l.jpg"
            />
        </div>
    </v-card>
</template>

<style scoped></style>
