<script setup>
import kakaoTalkLogo from "@/images/KakaoTalkLogo.png";
import PlotLogo from "@/components/icon/PlotLogo.vue";
</script>

<template>
    <v-card width="100%" class="done-card-layout">
        <div class="done-card-content">
            <plot-logo width="100" height="50" />
            <div>
                <p>이번주 소개된</p>
                <p>프로필을 모두 조회했습니다</p>
            </div>
            <img :src="kakaoTalkLogo" width="90" height="90" />
            <div>
                <p><span style="font-size: 20px;">추가 소개 / 궁금한 점</span>은</p>
                <p>하단 버튼을 눌러 관리자에게 문의주세요</p>
            </div>
            <v-btn height="48" class="done-card-btn">문의하러 가기</v-btn>
        </div>
    </v-card>
</template>

<style scoped>
.done-card-layout {
    height: 568px;
    box-shadow: 4px 4px 10px 0px #60e0e0;
    border-radius: 16px;
    padding: 16px;
}

.done-card-content {
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

.done-card-btn {
    width: 100%;
    padding: 11px;
    color: #60e0e0;
    background-color: #ffffff;
    font-weight: 700;
    font-size: 20px;
    border-radius: 16px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    letter-spacing: 0;
}
</style>
