<script setup>
import { storeToRefs } from "pinia";
import { userProfileDialogStore } from "@/components/view/store/userProfileDialogStore";
import PlotLogo from "@/components/icon/PlotLogo.vue";

const store = userProfileDialogStore();
const { dialog } = storeToRefs(store);
</script>

<template>
    <v-card class="card-layout">
        <div class="card-header">
            <plot-logo width="70" height="35" />
        </div>
        <div class="card-body">
            <div class="card-body-content">
                <p>새로운 인연을</p>
                <p>수락하면 매칭이 성사됩니다!</p>
                <br />
                <p>매칭권 1개가 차감되며,</p>
                <p>서로의 전화번호를</p>
                <p>즉시 확인할 수 있어요 :)</p>
            </div>
            <div class="card-body-caution">
                <p>*상대방이 거절하거나, 무응답하는 경우</p>
                <p>매칭권 1개가 다시 지급됩니다</p>
            </div>
            <v-btn class="card-body-btn1" @click="dialog = false">연락처 확인하기!</v-btn>
            <v-btn class="card-body-btn2" @click="dialog = false">조금만 더 고민해볼게요!</v-btn>
        </div>
    </v-card>
</template>

<style scoped>
.card-layout {
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    background-color: #ffffff;
    width: 310px;
    height: fit-content;
    border-radius: 16px !important;
    box-shadow: 0px 4px 4px #60e0e0;
}

.card-header {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #60e0e0;
    width: 100%;
    height: 60px;
}

.card-body {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 20px;
}

.card-body-content {
    width: 100%;
    background-color: #f1f1f1;
    border-radius: 16px;
    padding: 16px;
    font-size: 15px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 16px;
}

.card-body-caution {
    width: 100%;
    font-size: 11px;
    font-weight: 700;
    text-align: center;
    color: #f30000;
    margin-bottom: 16px;
}

.card-body-btn1 {
    width: 100%;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    color: #ffffff;
    height: 44px;
    background: #60e0e0;
    border: 1px solid #60e0e0;
    border-radius: 24px;
    margin-bottom: 12px;
    letter-spacing: 0;
}

.card-body-btn2 {
    width: 100%;
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    color: #000000;
    height: 44px;
    background: #ffffff;
    border: 1px solid #c4c4c4;
    border-radius: 24px;
    letter-spacing: 0;
}
</style>
