<script setup>
import CarouselLeft from "@/components/icon/CarouselLeft.vue";
import CarouselRight from "@/components/icon/CarouselRight.vue";
import HeartIcon from "@/components/icon/HeartIcon.vue";
import PassIcon from "@/components/icon/PassIcon.vue";
import ProfileImage from "@/components/image/ProfileImage.vue";
import UserProfileLayout from "@/components/layout/UserProfileLayout.vue";
import { ref } from "vue";

const refuseDialog = ref(null);
const agreeDialog = ref(null);
</script>

<template>
    <user-profile-layout>
        <div class="w-100">
            <v-carousel height="auto" hide-delimiters style="box-shadow: 4px 4px 10px 0 #60e0e0;">
                <template #prev="{ props }">
                    <carousel-left @click="props.onClick"></carousel-left>
                </template>
                <template #next="{ props }">
                    <carousel-right @click="props.onClick"></carousel-right>
                </template>
                <v-carousel-item>
                    <profile-image
                        src="https://i.namu.wiki/i/RmPNdn0sjKx-SYRoeRffcS5pc1rZXK-uA6PQqqU_kLFrqdMVdD3vM9HeF4c_1DLloZ1qu8KZLDwRwO8y-3vNriadzKfcXOeWaQFwwLC2Bn_HxoX1E-clw78tDqSLGLb37UHelCwkxGLeqKIpHvqPtA.webp"
                    />
                </v-carousel-item>
                <v-carousel-item>
                    <profile-image
                        src="https://i.namu.wiki/i/VE44Pr9Xrqrinf43GS7Yu945HyT3XyKWhmisPJcZ6qaCqV9J4oLnpUOHSrY-rjBh8j6ZI-3KtYkNf9x8sBe0Ew.webp"
                    />
                </v-carousel-item>
                <v-carousel-item>
                    <profile-image src="https://cdn.k-trendynews.com/news/photo/202312/162732_242532_2228.jpg" />
                </v-carousel-item>
            </v-carousel>
        </div>
        <div class="w-100 d-flex flex-column" style="gap: 10px; box-shadow: 4px 4px 10px 0 #60e0e0; border-radius: 16px; padding: 13px 20px;">
            <div style="width: 100%; display: flex; gap: 10px; justify-content: left; align-items: center;">
                <div style="width: 70px; min-width:70px; height: 70px;  background-color: #F1F1F1; border-radius: 70px; "></div>
                <span style="font-weight: 800; font-size: 15px; ">매니저의 코멘트를 살펴보세요 !</span>
            </div>
            <div class="w-100" style=" background-color: #F1F1F1; border-radius: 16px; padding: 12px 24px; font-weight: 700; font-size: 14px;">
                아담하면서도 볼륨있는 몸매 라인과 맑고 큰 눈이 돋보이는 여성 회원입니다. 또래에 비해 성숙한 사고와 뛰어난 공감 또래에 비해 성숙한
                사고와 뛰어난 공감 능력을 갖춘 다양한 매력을 가진 분입니다.
            </div>
        </div>
        <div
            style="width: 100%; display: flex; flex-direction: column; padding: 16px; gap: 44px;  box-shadow: 4px 4px 10px 0 #60e0e0; border-radius: 16px;"
        >
            <div
                style="display: flex; flex-direction: row; justify-content: space-between; align-items: center; padding: 21px 30px; gap: 10px; background: #F1F1F1;box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);border-radius: 16px;"
            >
                <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 7px;">
                    <v-icon icon="mdi-account-circle" size="30" />
                    <span style="font-weight: 300; font-size: 16px;">중소기업</span>
                </div>
                <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 7px;">
                    <v-icon icon="mdi-map-marker-radius" size="30" />
                    <span style="font-weight: 300; font-size: 16px;">서울 남부</span>
                </div>
                <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 7px;">
                    <v-icon icon="mdi-format-list-bulleted" size="30" />
                    <span style="font-weight: 300; font-size: 16px;">155CM</span>
                </div>
            </div>
            <div style="width: 100%; display: flex; flex-direction: column; gap: 24px;">
                <div
                    style="width: 100%; text-align: center; background-color: #60E0E0; border-radius: 16px; color: #FFFFFF; padding-block: 10px; font-weight: 700; font-size: 17px; box-shadow: 0px 4px 4px 0px #00000040;"
                >
                    나를 표현하는 모든 키워드
                </div>
                <div style="width: 100%; display: flex; flex-wrap: wrap; justify-content: left; align-items: center; padding-inline: 20px; gap: 8px;">
                    <div style="width: 100%; display: flex; gap: 8px;">
                        <div
                            style="box-sizing: border-box; background: rgba(96, 224, 224, 0.55);border: 2px solid #60E0E0;border-radius: 10px; font-size: 14px; font-weight: 700; padding: 2px 10px;"
                        >
                            ENFP
                        </div>
                        <div
                            style="width: 100%; text-align: center; box-sizing: border-box; background: rgba(96, 224, 224, 0.55);border: 2px solid #60E0E0;border-radius: 10px; font-size: 14px; font-weight: 700; padding: 2px 10px;"
                        >
                            일주일에 1~2번 데이트
                        </div>
                    </div>
                    <div style="width: 100%; display: flex; gap: 8px;">
                        <div
                            style="width: 100%; text-align: center; box-sizing: border-box; background: rgba(96, 224, 224, 0.55);border: 2px solid #60E0E0;border-radius: 10px; font-size: 14px; font-weight: 700; padding: 2px 10px;"
                        >
                            긍정적인
                        </div>
                        <div
                            style="width: 100%; text-align: center; box-sizing: border-box; background: rgba(96, 224, 224, 0.55);border: 2px solid #60E0E0;border-radius: 10px; font-size: 14px; font-weight: 700; padding: 2px 10px;"
                        >
                            센스있는
                        </div>
                        <div
                            style="width: 100%; text-align: center; box-sizing: border-box; background: rgba(96, 224, 224, 0.55);border: 2px solid #60E0E0;border-radius: 10px; font-size: 14px; font-weight: 700; padding: 2px 10px;"
                        >
                            애교있는
                        </div>
                    </div>
                    <div style="width: 100%; display: flex; gap: 8px;">
                        <div
                            style="width: 100%; text-align: center; box-sizing: border-box; background: rgba(96, 224, 224, 0.55);border: 2px solid #60E0E0;border-radius: 10px; font-size: 14px; font-weight: 700; padding: 2px 10px;"
                        >
                            반려동물
                        </div>
                        <div
                            style="width: 100%; text-align: center; box-sizing: border-box; background: rgba(96, 224, 224, 0.55);border: 2px solid #60E0E0;border-radius: 10px; font-size: 14px; font-weight: 700; padding: 2px 10px;"
                        >
                            카페
                        </div>
                        <div
                            style="width: 100%; text-align: center; box-sizing: border-box; background: rgba(96, 224, 224, 0.55);border: 2px solid #60E0E0;border-radius: 10px; font-size: 14px; font-weight: 700; padding: 2px 10px;"
                        >
                            운동
                        </div>
                    </div>
                </div>
            </div>
            <div style="width: 100%; display: flex; flex-direction: column; gap: 22px;">
                <div
                    style="width: 100%; text-align: center; background-color: #60E0E0; border-radius: 16px; color: #FFFFFF; padding-block: 10px; font-weight: 700; font-size: 17px; box-shadow: 0px 4px 4px 0px #00000040;"
                >
                    내가 하는 일 혹은 나의 라이프 스타일
                </div>
                <div style="width: 100%; height: 5px; background: #60E0E0;border-radius: 16px;"></div>
                <div
                    style="display: flex; justify-content: center; align-items: center; min-height: 158px; background: #F1F1F1; box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); border-radius: 16px; padding: 19px 28px; font-size: 14px; font-weight: 700;"
                >
                    저는 병원에서 해외 국가들을 대상으로 마케팅을 하는 업무를 하고 있습니다. 성인이 되서 바로 경제적으로 독립해서 살고 있어서
                    또래들보다 철이 빨리 들었다는 이야기를 많이 들어요 ! 독립해서 살고 있어서 또래들보다 철이 빨리 들었다는 이야기를 많이 들어요 !
                    들어요 !
                </div>
                <div
                    style="width: 100%; text-align: center; background-color: #60E0E0; border-radius: 16px; color: #FFFFFF; padding-block: 10px; font-weight: 700; font-size: 17px; box-shadow: 0px 4px 4px 0px #00000040;"
                >
                    나의 미래 연인에게 하고싶은 말
                </div>
                <div style="width: 100%; height: 5px; background: #60E0E0;border-radius: 16px;"></div>
                <div
                    style="display: flex; justify-content: center; align-items: center; min-height: 158px; background: #F1F1F1; box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); border-radius: 16px; padding: 19px 28px; font-size: 14px; font-weight: 700;"
                >
                    저랑 잘 맞는 분을 만나게 된다면 퇴근 후 데이트나, 드라이브, 주말엔 종종 글램핑도 가고싶어요 :D 그리고 하고싶은 것도 많아서 이야기
                    하다보면 같이 가고 싶어지실꺼에요 ㅎ
                </div>
            </div>
        </div>
        <div class="w-100 d-flex justify-space-between">
            <v-btn
                color="#60E0E0"
                style="width: 49%; height: 82px; box-shadow: 4px 4px 10px 0 #60e0e0; border-radius: 16px;"
                @click="agreeDialog = true"
            >
                <div class="d-flex flex-column justify-center align-center h-100" style="gap: 4px;">
                    <heart-icon></heart-icon>
                    <span class="font-weight-bold text-white" style="font-size: 20px; letter-spacing: 0;">플러팅 보내기</span>
                </div>
            </v-btn>
            <v-dialog v-model="agreeDialog" width="auto" :persistent="true">
                <v-card
                    class="d-flex flex-column"
                    style="padding-block: 30px; background-color: #FFFFFF; box-shadow: 0px 4px 4px 0px #60E0E0; width: 309px; height: 465px; border-radius: 16px;"
                >
                    <div class="d-flex justify-center align-center" style="background: #60E0E0; width: 100%; height: 60px; margin-bottom: 24px;">
                        <span style="font-size: 30px; color: #FFFFFF; font-weight: 400;">Plotting</span>
                    </div>
                    <div
                        class="d-flex justify-center align-center flex-column"
                        style="height: 200px; margin-inline: 26px; margin-bottom: 26px; width: 256px; background: #F1F1F1; border-radius: 16px; font-size: 16px; font-weight: 500; line-height: 19px; text-align: center;"
                    >
                        <span>플러팅을 보내기 위해</span>
                        <span><span style="font-weight: 800;">매칭권</span>을 먼저 구매해주세요<br /></span>
                        <span>😀</span>
                    </div>
                    <div class="d-flex justify-center w-100" style="margin-bottom: 14px;">
                        <v-btn
                            color="#60E0E0"
                            style="border: 1px solid #60E0E0; border-radius: 24px; width: 268px; height: 44px; box-shadow: none; "
                            @click="agreeDialog = false"
                        >
                            <span style="text-align: center; color:#FFFFFF; font-weight: 700; font-size: 20px; line-height: 24px;"
                                >구매하러 가기 !</span
                            >
                        </v-btn>
                    </div>
                    <div class="d-flex justify-center w-100">
                        <v-btn
                            style="border: 1px solid #C4C4C4; border-radius: 24px; width: 268px; height: 44px; box-shadow: none;"
                            @click="agreeDialog = false"
                        >
                            <span style="text-align: center; font-weight: 400; font-size: 18px; line-height: 22px;">새로운 인연 포기할게요..</span>
                        </v-btn>
                    </div>
                </v-card>
            </v-dialog>
            <v-btn
                color="#60E0E0"
                style="width: 49%; height: 82px; box-shadow: 0px 4px 4px 0px #00000040; border-radius: 16px;"
                @click="refuseDialog = true"
            >
                <div class="d-flex flex-column justify-center align-center h-100" style="gap: 4px;">
                    <pass-icon></pass-icon>
                    <span class="font-weight-bold text-white" style="font-size: 20px; letter-spacing: 0;">패스할게요</span>
                </div>
            </v-btn>
            <v-dialog v-model="refuseDialog" width="auto" :persistent="true">
                <v-card
                    class="d-flex flex-column"
                    style="padding-block: 30px; background-color: #FFFFFF; box-shadow: 0px 4px 4px 0px #60E0E0; width: 309px; height: 465px; border-radius: 16px;"
                >
                    <div class="d-flex justify-center align-center" style="background: #60E0E0; width: 100%; height: 60px; margin-bottom: 24px;">
                        <span style="font-size: 30px; color: #FFFFFF; font-weight: 400;">Plotting</span>
                    </div>
                    <div
                        class="d-flex justify-center align-center flex-column"
                        style="height: 200px; margin-inline: 26px; margin-bottom: 26px; width: 256px; background: #F1F1F1; border-radius: 16px; font-size: 18px; font-weight: 700; line-height: 22px; text-align: center;"
                    >
                        <span>거절하시면,</span>
                        <span>해당 프로필은</span>
                        <span>재열람이 불가능합니다.</span>
                        <br />
                        <span>정말 패스하시겠습니까 ?</span>
                    </div>
                    <div class="d-flex justify-center w-100" style="margin-bottom: 14px;">
                        <v-btn
                            color="#60E0E0"
                            style="border: 1px solid #60E0E0; border-radius: 24px; width: 268px; height: 44px; box-shadow: none;"
                            @click="refuseDialog = false"
                        >
                            <span style="text-align: center; color:#FFFFFF; font-weight: 700; font-size: 20px; line-height: 24px;"
                                >한 번 더 생각해 볼게요</span
                            >
                        </v-btn>
                    </div>
                    <div class="d-flex justify-center w-100">
                        <v-btn
                            style="border: 1px solid #C4C4C4; border-radius: 24px; width: 268px; height: 44px; box-shadow: none;"
                            @click="refuseDialog = false"
                        >
                            <span style="text-align: center; font-weight: 400; font-size: 18px; line-height: 22px;">네 패스할게요</span>
                        </v-btn>
                    </div>
                </v-card>
            </v-dialog>
        </div>
        <div class="w-100 d-flex justify-center" style="">
            <div
                class="d-flex justify-center align-center"
                style="background: #60E0E0; box-shadow: 0px 4px 4px 0px #00000040; text-align: center; width: 310px; height: 64px; border-radius: 16px;"
            >
                <span class="font-weight-bold" style="font-size: 18px; color: white; line-height: 22px;"
                    >플러팅 중 입니다...<br />상대방의 답변을 기다리고 있습니다</span
                >
            </div>
        </div>
        <div class="w-100 d-flex justify-center" style="">
            <div
                class="d-flex justify-center align-center"
                style="background: #3B3B3D; box-shadow: 0px 4px 4px 0px #00000040; text-align: center; width: 310px; height: 64px; border-radius: 16px;"
            >
                <span class="font-weight-bold" style="font-size: 18px; color: #60E0E0; line-height: 22px;"
                    >매칭이 성사되었습니다 😀<br />010-0000-0000</span
                >
            </div>
        </div>
        <div class="w-100 d-flex justify-center" style="">
            <div
                class="d-flex justify-center align-center"
                style="background: #3B3B3D; box-shadow: 0px 4px 4px 0px #00000040; text-align: center; width: 310px; height: 64px; border-radius: 16px;"
            >
                <span class="font-weight-bold" style="font-size: 18px; color: #60E0E0; line-height: 22px; ">상대방이 플러팅을 거절했습니다</span>
            </div>
        </div>
        <div class="w-100 d-flex justify-center" style="">
            <div
                class="d-flex justify-center align-center"
                style="background: #3B3B3D; box-shadow: 0px 4px 4px 0px #00000040; text-align: center; width: 310px; height: 64px; border-radius: 16px;"
            >
                <span class="font-weight-bold" style="font-size: 18px; color: #60E0E0; line-height: 22px; ">010-0000-0000</span>
            </div>
        </div>
    </user-profile-layout>
</template>

<style scoped></style>
