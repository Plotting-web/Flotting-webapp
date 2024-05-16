<script setup>
import { userProfileDialogStore } from "@/components/view/store/userProfileDialogStore";
import { storeToRefs } from "pinia";

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
            style="height: 200px; margin-inline: 26px; margin-bottom: 26px; width: 256px; background: #F1F1F1; border-radius: 16px; font-size: 18px; font-weight: 700; line-height: 22px; text-align: center;"
        >
            <span>거절하시면,</span>
            <span>해당 프로필은</span>
            <span>재열람이 불가능합니다.</span>
            <br />
            <span>정말 패스하시겠습니까 ?</span>
        </div>
        <div class="d-flex justify-center w-100" style="margin-bottom: 14px;">
            <v-btn
                color="#60E0E0"
                style="border: 1px solid #60E0E0; border-radius: 24px; width: 268px; height: 44px; box-shadow: none;"
                @click="dialog = false"
            >
                <span style="text-align: center; color:#FFFFFF; font-weight: 700; font-size: 20px; line-height: 24px;">한 번 더 생각해 볼게요</span>
            </v-btn>
        </div>
        <div class="d-flex justify-center w-100">
            <v-btn style="border: 1px solid #C4C4C4; border-radius: 24px; width: 268px; height: 44px; box-shadow: none;" @click="dialog = false">
                <span style="text-align: center; font-weight: 400; font-size: 18px; line-height: 22px;">네 패스할게요</span>
            </v-btn>
        </div>
    </v-card>
</template>

<style scoped></style>
