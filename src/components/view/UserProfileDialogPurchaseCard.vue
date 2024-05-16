<script setup>
import { storeToRefs } from "pinia";
import { userProfileDialogStore } from "@/components/view/store/userProfileDialogStore";

const store = userProfileDialogStore();
const { dialog } = storeToRefs(store);
</script>

<template>
    <v-card
        class="d-flex flex-column"
        style="padding-block: 30px; background-color: #FFFFFF; box-shadow: 0px 4px 4px 0px #60E0E0; width: 309px; height: 465px; border-radius: 16px;"
    >
        <div class="d-flex justify-center align-center" style="background: #60E0E0; width: 100%; height: 60px; margin-bottom: 24px;">
            <span style="font-size: 30px; color: #FFFFFF; font-weight: 400;">Plotting</span>
        </div>
        <div
            class="d-flex justify-center align-center flex-column"
            style="height: 200px; margin-inline: 26px; margin-bottom: 26px; width: 256px; background: #F1F1F1; border-radius: 16px; font-size: 16px; font-weight: 500; line-height: 19px; text-align: center;"
        >
            <span>플러팅을 보내기 위해</span>
            <span><span style="font-weight: 800;">매칭권</span>을 먼저 구매해주세요<br /></span>
            <span>😀</span>
        </div>
        <div class="d-flex justify-center w-100" style="margin-bottom: 14px;">
            <v-btn
                color="#60E0E0"
                style="border: 1px solid #60E0E0; border-radius: 24px; width: 268px; height: 44px; box-shadow: none; "
                @click="dialog = false"
            >
                <span style="text-align: center; color:#FFFFFF; font-weight: 700; font-size: 20px; line-height: 24px;">구매하러 가기 !</span>
            </v-btn>
        </div>
        <div class="d-flex justify-center w-100">
            <v-btn style="border: 1px solid #C4C4C4; border-radius: 24px; width: 268px; height: 44px; box-shadow: none;" @click="dialog = false">
                <span style="text-align: center; font-weight: 400; font-size: 18px; line-height: 22px;">새로운 인연 포기할게요..</span>
            </v-btn>
        </div>
    </v-card>
</template>

<style scoped></style>
