<script setup>
import HeartIcon from "@/components/icon/HeartIcon.vue";
import PassIcon from "@/components/icon/PassIcon.vue";
import { userProfileDialogStore } from "@/components/profile/store/userProfileDialogStore";
import { storeToRefs } from "pinia";
import UserProfileDialogPurchaseCard from "@/components/profile/UserProfileDialogPurchaseCard.vue";
import UserProfileDialogPassCard from "@/components/profile/UserProfileDialogPassCard.vue";
import UserProfileDialogSendCard from "@/components/profile/UserProfileDialogSendCard.vue";
import UserProfileDialogSendDoneCard from "@/components/profile/UserProfileDialogSendDoneCard.vue";
import UserProfileDialogAgreeCard from "@/components/profile/UserProfileDialogAgreeCard.vue";
import { ref } from "vue";

const store = userProfileDialogStore();
const { dialog, status } = storeToRefs(store);

const onClickBtn = val => {
    status.value = val;
    dialog.value = true;
};

const isPlot = ref(false);
</script>

<template>
    <div class="user-prf-nav-btn-layout">
        <v-btn
            v-if="!isPlot"
            color="#60E0E0"
            style="width: 49%; height: 82px; box-shadow: 4px 4px 10px 0 #60e0e0; border-radius: 16px;"
            @click="() => onClickBtn('send')"
        >
            <div class="d-flex flex-column justify-center align-center h-100" style="gap: 4px;">
                <heart-icon></heart-icon>
                <span class="font-weight-bold text-white" style="font-size: 20px; letter-spacing: 0;">좋아요 보내기</span>
            </div>
        </v-btn>
        <v-btn
            v-else
            color="#60E0E0"
            style="width: 49%; height: 82px; box-shadow: 4px 4px 10px 0 #60e0e0; border-radius: 16px;"
            @click="() => onClickBtn('approve')"
        >
            <div class="d-flex flex-column justify-center align-center h-100" style="gap: 4px;">
                <heart-icon></heart-icon>
                <span class="font-weight-bold text-white" style="font-size: 20px; letter-spacing: 0;">좋아요 보내기</span>
            </div>
        </v-btn>
        <v-btn
            color="#60E0E0"
            style="width: 49%; height: 82px; box-shadow: 0px 4px 4px 0px #00000040; border-radius: 16px;"
            @click="() => onClickBtn('pass')"
        >
            <div class="d-flex flex-column justify-center align-center h-100" style="gap: 4px;">
                <pass-icon></pass-icon>
                <span class="font-weight-bold text-white" style="font-size: 20px; letter-spacing: 0;">패스할게요</span>
            </div>
        </v-btn>
    </div>
    <v-dialog v-model="dialog" width="auto" :persistent="true">
        <user-profile-dialog-purchase-card v-if="status === 'purchase'" />
        <user-profile-dialog-pass-card v-else-if="status === 'pass'" />
        <user-profile-dialog-send-card v-else-if="status === 'send'" />
        <user-profile-dialog-agree-card v-else-if="status === 'agree'" />
        <user-profile-dialog-send-done-card v-else-if="status === 'send-done'" />
    </v-dialog>
</template>

<style scoped>
.user-prf-nav-btn-layout {
    width: 100%;
    display: flex;
    justify-content: space-between;
}
</style>
