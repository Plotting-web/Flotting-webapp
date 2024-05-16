<script setup>
import kakaoTalkLogo from "@/images/KakaoTalkLogo.png";
</script>

<template>
    <v-card
        width="100%"
        style="
            height: 568px;
            box-shadow: 4px 4px 10px 0px #60e0e0;
            border-radius: 16px;
        "
    >
        <div
            style="
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding-inline: 30px;
            "
        >
            <span
                style="
                    text-align: center;
                    font-weight: 800;
                    font-size: 16px;
                    letter-spacing: 0;
                    margin-bottom: 75px;
                "
            >
                이번 주 모든 프로필을 조회했습니다.
            </span>
            <img
                :src="kakaoTalkLogo"
                alt=""
                style="
                    width: 110px;
                    height: 110px;
                    margin-bottom: 75px;
                "
            />
            <span
                style="
                    text-align: center;
                    font-weight: 500;
                    font-size: 15px;
                    letter-spacing: 0;
                "
            >
                <span style="font-weight: 700;">추가 소개 / 궁긍함 점</span>
                은
            </span>
            <span
                style="
                    text-align: center;
                    font-weight: 500;
                    font-size: 15px;
                    letter-spacing: 0;
                "
            >
                하단 버튼을 눌러 관리자에게 문의주세요
            </span>
            <span
                style="
                    text-align: center;
                    font-weight: 500;
                    font-size: 15px;
                    letter-spacing: 0;
                    margin-bottom: 30px;
                "
            >
                (버튼 클릭 시 문의 오픈카톡방 이동)
            </span>
            <v-btn
                height="48"
                style="
                    width: 100%;
                    box-shadow: 0px 4px 4px 0px #00000040;
                    background: #60e0e0;
                    border-radius: 16px;
                    font-size: 20px;
                    letter-spacing: 0;
                    text-align: center;
                    color: white;
                    font-weight: 700;
                "
            >
                문의하러 가기
            </v-btn>
        </div>
    </v-card>
</template>

<style scoped></style>
