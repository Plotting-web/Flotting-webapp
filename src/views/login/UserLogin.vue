<script setup>
import MainHeader from "@/components/layout/MainHeader.vue";
import MainBody from "@/components/layout/MainBody.vue";
import { ref } from "vue";

const onChangeReqInput = e => {
    e.target.value = e.target.value
        .replace(/[^0-9]/g, "")
        .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
        .replace(/(\-{1,2})$/g, "");
    if (e.target.value.length > 13) {
        e.target.value = e.target.value.slice(0, 13);
    }
};
const onChangeResInput = e => {
    const val = e.target.value.replace(/[^0-9]/g, "").slice(0, 6);
    e.target.value = val;
    certNumber.value = val;
};

const phoneNumber = ref("");
const isRequest = ref(false);
const certNumber = ref("");

const onClickReqBtn = () => {
    console.log("onClickReqBtn");
    if (phoneNumber.value.length < 13) return alert("유효한 전화 번호가 아닙니다.");

    console.log("인증번호 전송 API");
    alert("인증번호가 전송되었습니다.");
    isRequest.value = true;
};
const onClickResBtn = () => {
    console.log("인증번호 확인 API");
};
</script>

<template>
    <main-header start="back" />
    <main-body is-header>
        <div class="login-layout">
            <div class="login-card">
                <p class="login-title">
                    LOGIN
                </p>
                <p class="login-sub-title">
                    PLOT은 본인인증을 완료해야 이용 가능합니다!
                </p>
                <div class="login-cert-req">
                    <input
                        v-model="phoneNumber"
                        type="tel"
                        class="login-cert-req-input"
                        placeholder="000-0000-0000"
                        maxlength="13"
                        @input="onChangeReqInput($event)"
                    />
                    <v-btn class="login-cert-req-btn" :disabled="isRequest" @click="onClickReqBtn">인증번호 발송</v-btn>
                </div>
                <input
                    v-model="certNumber"
                    type="number"
                    class="login-cert-res-input"
                    placeholder="인증번호 6자리 입력"
                    :disabled="!isRequest"
                    @input="onChangeResInput($event)"
                />
                <v-btn class="login-cert-res-btn" :disabled="!(isRequest && String(certNumber).length == 6)" @click="onClickResBtn">로그인</v-btn>
            </div>
        </div>
    </main-body>
</template>

<style scoped>
.login-layout {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 24px;
}
.login-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #ffffff;
    box-shadow: 4px 4px 10px #60e0e0;
    border-radius: 16px;
    padding: 20px;
}

.login-title {
    font-style: normal;
    font-weight: 800;
    font-size: 28px;
    text-align: center;
    color: #3b3b3d;
    margin-bottom: 20px;
}

.login-sub-title {
    width: 100%;
    text-align: center;
    background: #ffffff;
    border: 1px solid #d9d9d9;
    box-shadow: 0px 4px 4px rgba(96, 224, 224, 0.6);
    border-radius: 16px;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    text-align: center;
    color: #3b3b3d;
    padding: 16px;
    margin-bottom: 50px;
}

.login-cert-req {
    width: 100%;
    display: flex;
    gap: 8px;
    margin-bottom: 20px;
}

.login-cert-req-input {
    width: 100%; /* Frame 81 */
    height: 58px;
    padding: 0;
    text-align: center;
    background: #ffffff;
    border: 2px solid #60e0e0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
}

.login-cert-req-btn {
    height: 58px;
    background: #60e0e0;
    border: 2px solid #60e0e0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    font-weight: 700;
    font-size: 16px;
    text-align: center;
    color: #ffffff;
}

.login-cert-res-input {
    width: 100%; /* Frame 81 */
    height: 58px;
    padding: 0;
    text-align: center;
    background: #ffffff;
    border: 2px solid #60e0e0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    margin-bottom: 20px;
}
.login-cert-res-input:disabled {
    background: #f1f1f1;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
input[type="number"] {
    -moz-appearance: textfield;
}

.login-cert-res-btn {
    width: 100%;
    height: 58px;
    background: #60e0e0;
    border: 2px solid #60e0e0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    font-weight: 700;
    font-size: 22px;
    text-align: center;
    color: #ffffff;
}
</style>
