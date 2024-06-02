<script setup>
import UserProfileButton from "@/components/profile/UserProfileButton.vue";
import { userProfileDialogStore } from "@/components/profile/store/userProfileDialogStore";
import { storeToRefs } from "pinia";

defineProps({
    status: {
        type: String,
        default: "default" // default, sending, receiving, pending, success, fail, self
    }
});

const store = userProfileDialogStore();
const { dialog } = storeToRefs(store);
</script>

<template>
    <user-profile-button v-if="['sending', 'receiving'].includes(status)" />
    <div
        v-else-if="status === 'pending'"
        class="w-100 d-flex justify-center align-center"
        style="background: #60E0E0; box-shadow: 0px 4px 4px 0px #00000040; text-align: center; width: 310px; height: 64px; border-radius: 16px;"
    >
        <span class="font-weight-bold" style="font-size: 18px; color: white; line-height: 22px;"
            >좋아요가 전달됐어요!<br />상대방의 답변을 기다리고 있습니다.</span
        >
    </div>
    <div
        v-else-if="status === 'success'"
        class="w-100 d-flex justify-center align-center"
        style="background: #3B3B3D; box-shadow: 0px 4px 4px 0px #00000040; text-align: center; width: 310px; height: 64px; border-radius: 16px;"
    >
        <span class="font-weight-bold" style="font-size: 18px; color: #60E0E0; line-height: 22px;">매칭이 성사되었습니다😀<br />010-0000-0000</span>
    </div>
    <div
        v-else-if="status === 'fail'"
        class="w-100 d-flex justify-center align-center"
        style="background: #3B3B3D; box-shadow: 0px 4px 4px 0px #00000040; text-align: center; width: 310px; height: 64px; border-radius: 16px;"
    >
        <span class="font-weight-bold" style="font-size: 18px; color: #60E0E0; line-height: 22px; ">매칭이 성사되지 않았습니다😂</span>
    </div>
    <div
        v-else-if="status === 'self'"
        class="w-100 d-flex justify-center align-center"
        style="background: #3B3B3D; box-shadow: 0px 4px 4px 0px #00000040; text-align: center; width: 310px; height: 64px; border-radius: 16px;"
    >
        <span class="font-weight-bold" style="font-size: 18px; color: #60E0E0; line-height: 22px; ">010-0000-0000</span>
    </div>
</template>

<style scoped></style>
