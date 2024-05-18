<script setup>
import kakaoTalkLogo from "@/images/KakaoTalkLogo.png";
import PlotLogo from "@/components/icon/PlotLogo.vue";
</script>

<template>
    <v-card width="100%" class="finding-card-layout">
        <div class="finding-card-content">
            <plot-logo width="100" height="50" />
            <div>
                <p>새로운 인연을 찾는 중입니다!</p>
            </div>
            <img :src="kakaoTalkLogo" width="90" height="90" />
            <div>
                <p><span style="font-size: 20px;">추가 소개 / 궁금한 점</span>은</p>
                <p>하단 버튼을 눌러 관리자에게 문의주세요</p>
            </div>
            <v-btn height="48" class="finding-card-btn">문의하러 가기</v-btn>
        </div>
    </v-card>
</template>

<style scoped>
.finding-card-layout {
    height: 568px;
    box-shadow: 4px 4px 10px 0px #60e0e0;
    border-radius: 16px;
    padding: 16px;
}

.finding-card-content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: #60e0e0;
    border-radius: 16px;
    text-align: center;
    color: white;
    font-weight: 700;
    font-size: 17px;
    padding: 16px;
}

.finding-card-btn {
    width: 100%;
    color: #60e0e0;
    background-color: #ffffff;
    font-weight: 700;
    font-size: 20px;
    border-radius: 16px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    letter-spacing: 0;
}
</style>
