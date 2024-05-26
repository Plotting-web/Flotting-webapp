<script setup>
import { storeToRefs } from "pinia";
import { userProfileDialogStore } from "@/components/profile/store/userProfileDialogStore";
import PlotLogo from "@/components/icon/PlotLogo.vue";

const store = userProfileDialogStore();
const { dialog, status } = storeToRefs(store);

const onClickSend = () => {
    status.value = "send-done";
};
</script>

<template>
    <v-card class="card-layout">
        <div class="card-header">
            <plot-logo width="70" height="35" />
        </div>
        <div class="card-body">
            <div class="card-body-content">
                <p>매칭권 1개를 사용하면</p>
                <p>좋아요를 보낼 수 있어요!</p>
                <br />
                <p>매칭이 성사되면 문자로 알려드려요!</p>
                <p>새로운 인연의 연락처를 확인하세요 :)</p>
            </div>
            <div class="card-body-caution">
                <p>*상대방이 거절하거나, 무응답하는 경우</p>
                <p>사용한 매칭권을 다시 지급해드려요!</p>
            </div>
            <v-btn class="card-body-btn1" @click="onClickSend">좋아요 보내기!</v-btn>
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
