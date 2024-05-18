<script setup>
import { ref } from "vue";
import MainHeader from "@/components/layout/MainHeader.vue";
import MainBody from "@/components/layout/MainBody.vue";
import PlotLogo from "@/components/icon/PlotLogo.vue";

const dormantDialog = ref(null);
const resignDialog = ref(null);
const toggle = ref(false);

const onChangeToggle = val => {
    console.log(val);
    console.log("상태 변경 API");
    alert("변경 되었습니다.");
};

const onClickDormant = () => {
    dormantDialog.value = false;
};

const onClickResign = () => {
    resignDialog.value = false;
};
</script>

<template>
    <main-header start="back" end="store" title />
    <main-body is-header is-navigation>
        <div class="view-layout">
            <span class="title">내 상태 변경</span>
            <div class="content-layout">
                <div class="content-title-layout">
                    <p class="content-title">좋아요만 받기!</p>
                    <toggle-button v-model="toggle" @change="val => onChangeToggle(val)" />
                </div>
                <div class="content-text">
                    <div>
                        <p>나의 상태가 ‘휴면’으로 변경되며, 나의 프로필이 모두에게 비공개 됩니다.</p>
                    </div>
                    <div>
                        <p>이후 재이용 시 프로필 재등록 없이 바로 다시 서비스 재이용이 가능합니다.</p>
                    </div>
                </div>
            </div>
            <div class="content-layout">
                <p class="content-title">서비스 휴면</p>
                <div class="content-text">
                    <div>
                        <p>나의 상태가 ‘휴면’으로 변경되며, 나의 프로필이 모두에게 비공개 됩니다.</p>
                    </div>
                    <div>
                        <p>이후 재이용 시 프로필 재등록 없이 바로 다시 서비스 재이용이 가능합니다.</p>
                    </div>
                </div>
            </div>
            <div class="content-layout">
                <p class="content-title">서비스 탈퇴</p>
                <div class="content-text">
                    <div>
                        <p>탈퇴하면 직접 입력한 프로필 정보, 잔여 매칭권, 좋아요를 주고 받은 이력 등 모든 개인정보가 삭제됩니다.</p>
                    </div>
                    <div>
                        <p>이후 재이용 시 프로필을 재등록 해야하며, 상대방과의 매칭 기록도 삭제되어 이전과 동일한 사람이 소개될 수 있습니다.</p>
                    </div>
                </div>
            </div>
            <div class="btn-layout">
                <button class="btn-common" @click="dormantDialog = true">
                    <p style="font-weight: 700; font-size: 14px;">서비스 휴면</p>
                    <p style="font-weight: 400; font-size: 10px;">(다음에 다시 이용할게요)</p>
                </button>
                <button class="btn-common" @click="resignDialog = true">
                    <p style="font-weight: 700; font-size: 14px;">서비스 탈퇴</p>
                    <p style="font-weight: 400; font-size: 10px;">(모든 기록 삭제해주세요)</p>
                </button>
            </div>
        </div>
        <v-dialog v-model="dormantDialog" width="auto" :persistent="true">
            <v-card class="card-layout">
                <div class="card-header">
                    <plot-logo width="70" height="35" />
                </div>
                <div class="card-body">
                    <div class="card-body-content">
                        <p>나의 서비스 상태가 ‘휴면’으로 변경되며, 나의 프로필이 모두에게 비공개 됩니다.</p>
                        <br />
                        <p>이후 재이용 시 프로필 재등록 없이 바로 다시 서비스 재이용이 가능합니다.</p>
                        <br />
                        <p>모든 내용을 읽고 동의하시겠습니까?</p>
                    </div>
                    <v-btn class="card-body-btn1" @click="dormantDialog = false">서비스 계속 이용</v-btn>
                    <v-btn class="card-body-btn2" @click="onClickDormant">서비스 휴면</v-btn>
                </div>
            </v-card>
        </v-dialog>
        <v-dialog v-model="resignDialog" width="auto" :persistent="true">
            <v-card class="card-layout">
                <div class="card-header">
                    <plot-logo width="70" height="35" />
                </div>
                <div class="card-body">
                    <div class="card-body-content">
                        <p>탈퇴하면 직접 입력한 프로필 정보, 잔여 매칭권, 좋아요를 주고 받은 이력 등 모든 개인정보가 삭제됩니다.</p>
                        <br />
                        <p>이후 재이용 시 프로필을 재등록 해야하며, 상대방과의 매칭 기록 및 모든 결제 내역은 복구가 절대 불가합니다.</p>
                        <br />
                        <p>모든 내용을 읽고 동의하시겠습니까?</p>
                    </div>
                    <v-btn class="card-body-btn1" @click="resignDialog = false">서비스 계속 이용</v-btn>
                    <v-btn class="card-body-btn2" @click="onClickResign">서비스 탈퇴</v-btn>
                </div>
            </v-card>
        </v-dialog>
    </main-body>
</template>

<style scoped>
@import url(@vueform/toggle/themes/default.css);

.view-layout {
    width: 100%;
    padding: 28px 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

.title {
    min-width: 240px;
    padding: 12px 24px;
    border-radius: 16px;
    box-shadow: 0px 4px 4px 0px #60e0e0;
    background: #f1f1f1;
    font-weight: 900;
    font-size: 23px;
    text-align: center;
}

.content-layout {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.content-title-layout {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.content-title {
    width: fit-content;
    padding: 16px 32px;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    background-color: #f7f7f7;
    border-radius: 16px;
}

.content-text {
    padding: 24px 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-size: 17px;
    font-weight: 300;
    text-align: center;
    background-color: #f1f1f1;
    border-radius: 16px;
}

.btn-layout {
    width: 100%;
    display: flex;
    padding: 12px 20px;
    gap: 16px;
    background-color: #f1f1f1;
    border-radius: 16px;
}

.btn-common {
    width: 50%;
    height: 52px;
    padding-inline: 20px;
    border-radius: 16px;
    text-align: center;
    background-color: #ffffff;
}

.btn-common:hover {
    background-color: #f9f9f9;
    box-shadow: 0px 2px 4px -1px #dfdfdf;
}

.btn-common:active {
    background-position: 100% 0;
    background-color: #a0a0a0;
    -o-transition: all 0.2s ease-in-out;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
}

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
    font-size: 13px;
    font-weight: 300;
    text-align: center;
    margin-bottom: 28px;
    color: #000000;
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
