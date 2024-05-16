<script setup>
import kakaoTalkLogo from "@/images/KakaoTalkLogo.png";
</script>

<template>
    <v-card width="100%">
        <div class="d1">
            <span class="s1">새로운 인연을 찾는 중입니다!</span>
            <img :src="kakaoTalkLogo" alt="" class="img1" />
            <span class="s2"><span class="s2-1">추가 소개 / 궁긍함 점</span>은</span>
            <span class="s3">하단 버튼을 눌러 관리자에게 문의주세요 </span>
            <span class="s4"> (버튼 클릭 시 문의 오픈카톡방 이동)</span>
            <v-btn height="48" class="btn1">
                문의하러 가기
            </v-btn>
        </div>
    </v-card>
</template>

<style scoped>
.v-card {
    height: 568px;
    box-shadow: 4px 4px 10px 0px #60e0e0;
    border-radius: 16px;
}

.d1 {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-inline: 30px;
}

.s1 {
    text-align: center;
    font-weight: 800;
    font-size: 16px;
    letter-spacing: 0;
    margin-bottom: 75px;
}

.img1 {
    width: 110px;
    height: 110px;
    margin-bottom: 75px;
}

.s2 {
    text-align: center;
    font-weight: 500;
    font-size: 15px;
    letter-spacing: 0;
}

.s2-1 {
    font-weight: 700;
}

.s3 {
    text-align: center;
    font-weight: 500;
    font-size: 15px;
    letter-spacing: 0;
}

.s4 {
    text-align: center;
    font-weight: 500;
    font-size: 15px;
    letter-spacing: 0;
    margin-bottom: 30px;
}

.btn1 {
    width: 100%;
    box-shadow: 0px 4px 4px 0px #00000040;
    background: #60e0e0;
    border-radius: 16px;
    font-size: 20px;
    letter-spacing: 0;
    text-align: center;
    color: white;
    font-weight: 700;
}
</style>
