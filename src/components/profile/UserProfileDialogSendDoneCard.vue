<script setup>
import { storeToRefs } from "pinia";
import { userProfileDialogStore } from "@/components/profile/store/userProfileDialogStore";
import PlotLogo from "@/components/icon/PlotLogo.vue";
import { onMounted } from "vue";

const store = userProfileDialogStore();

onMounted(() => {
    setTimeout(() => {
        store.reset();
    }, 2000);
});
</script>

<template>
    <v-card class="card-layout">
        <plot-logo width="130" height="65" />
        <div class="card-text">
            <p>좋아요가 전달되었고,</p>
            <p>매칭권 1개가 사용되었습니다.</p>
        </div>
        <div style="card-sub-text">
            <p>* 상대방이 거절하거나 무응답하는 경우,</p>
            <p>사용한 매칭권을 다시 지급해드려요</p>
        </div>
    </v-card>
</template>

<style scoped>
.card-layout {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    align-items: center;
    background-color: #60e0e0;
    width: 310px;
    height: 465px;
    border-radius: 16px !important;
    color: #ffffff;
    text-align: center;
    box-shadow: 0px 4px 4px #60e0e0;
}

.card-text {
    font-weight: 700;
    font-size: 16px;
}

.card-sub-text {
    font-weight: 600;
    font-size: 14px;
}
</style>
