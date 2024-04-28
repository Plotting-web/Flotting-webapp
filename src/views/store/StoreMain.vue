<script setup>
import MainHeader from "@/components/layout/MainHeader.vue";
import MainNavigation from "@/components/layout/MainNavigation.vue";
import { ref } from "vue";

const dialog = ref(null);
const selectedItem = ref(null);

const manList = [
    {
        title: "매칭권 5회",
        sale: "50",
        originPrice: "338,000",
        discountPrice: "169,000"
    },
    {
        title: "매칭권 3회",
        sale: "40",
        originPrice: "198,000",
        discountPrice: "119,000"
    },
    {
        title: "매칭권 1회",
        sale: "30",
        originPrice: "70,000",
        discountPrice: "49,000"
    }
];

const womanList = [
    {
        title: "매칭권 5회",
        sale: "50",
        originPrice: "198,000",
        discountPrice: "99,000"
    },
    {
        title: "매칭권 3회",
        sale: "40",
        originPrice: "115,000",
        discountPrice: "69,000"
    },
    {
        title: "매칭권 1회",
        sale: "30",
        originPrice: "41,000",
        discountPrice: "29,000"
    }
];

const clickedText = () => {
    dialog.value = false;
    selectedItem.value = null;
    alert("문자로 안내해드렸습니다!");
};
</script>

<template>
    <div class="w-100 h-100">
        <main-header start="back" end="mail" :title="false" />
        <main class="w-100 h-100" style="padding-top: 60px; padding-bottom: 80px;">
            <div class="mx-auto" style="max-width: 390px; min-width: 360px;">
                <div style="padding: 46px 22px; display: flex; flex-direction: column; align-items: center;">
                    <div
                        style="width: fit-content;padding: 7px 38px;background: #FFFFFF;box-shadow: 4px 4px 10px #60E0E0;border-radius: 16px; text-align: center; font-weight: 700; font-size: 23px; margin-bottom: 24px;"
                    >
                        매칭권 스토어
                    </div>
                    <div
                        style="width: fit-content; padding: 12px 15px;background: #FFFFFF;box-shadow: 4px 4px 10px #60E0E0;border-radius: 16px; text-align: center; font-weight: 700; font-size: 15px; margin-bottom: 24px;"
                    >
                        새로운 만남을 위해서는 매칭권이 필요해요!
                    </div>
                    <div
                        style="display: flex; flex-direction: column; color: #35A8AA; font-weight: 700; text-align: center; width: 100%; margin-bottom: 24px;"
                    >
                        <span style="font-size: 18px;">잔여 매칭권 100% 환불 가능</span>
                        <span style="font-size: 15px;">(커플 성사 / 단순 변심 등 사유불문)</span>
                    </div>
                    <div
                        style="width: 100%; padding: 23px 25px; background: #FFFFFF;box-shadow: 4px 4px 10px #60E0E0;border-radius: 16px; display: flex; flex-direction: column; gap: 21px; margin-bottom: 50px;"
                    >
                        <v-card
                            v-for="(item, i) in manList"
                            :key="item.title + item.sale"
                            style="position: relative; border: 2px solid #A49999; border-radius: 7px; font-weight: 700; box-shadow: none;padding-inline: 20px; margin:0; line-height: 1.2;"
                            :style="i === 1 && 'border-color: #FF0000'"
                            @click="
                                () => {
                                    dialog = true;
                                    selectedItem = item;
                                }
                            "
                        >
                            <div style="width: 100%; height: 94px; display: flex; justify-content: space-between; align-items: center;">
                                <span style="color: #35A8AA; font-size: 22px;">{{ item.title }}</span>
                                <div style="display: flex; gap: 5px;">
                                    <div style="display: flex; flex-direction: column; justify-content: center; color: #FF0000; font-size: 12px;">
                                        <span>{{ item.sale }}%</span>
                                        <span>OFF</span>
                                    </div>
                                    <div style="display: flex; flex-direction: column; justify-content: center; font-size: 16px;">
                                        <span style="text-decoration: line-through; ">{{ item.originPrice }}</span>
                                        <span style="color: #FF0000;">{{ item.discountPrice }}</span>
                                    </div>
                                </div>
                            </div>
                            <div v-if="i === 1" style="position: absolute; right: 18px; top: 5px; display: flex; justify-content: center; align-items: center; background-color: #FF0000; width: 30px; height: 20px; border-radius: 3px; color: #FFFFFF; font-weight: 700; font-size: 11px;">
                              인기
                            </div>
                        </v-card>
                    </div>
                    <div
                        style="width: 100%; padding-inline: 10px; display: flex; flex-direction: column; font-size: 15px; line-height: 18px; color: #8C8C8C; font-weight: 400;"
                    >
                        <span style="text-align: center; font-weight: 700;">[매칭권 환불 정책]</span>
                        <br />
                        <span>- 환불 요청은 [설정 - 고객문의]로 문의 남겨주시면 확인 후 환불 도와드립니다.</span>
                        <span>- 사용한 매칭권(매칭권 1회 구매 가격 기준), VAT를 제외한 금액으로 3영업일 내에 환불됩니다.</span>
                        <span
                            >- 플러팅은 연락처 공개 이후 만남에는 관여하지 않습니다. 매칭 이후 성의없는 연락으로 인한 매칭비 환불은 불가합니다.</span
                        >
                        <span
                            >-매칭 직후 연락 두절 혹은 비매너 회원은 고객문의를 통해 신고해주시면 관리자 판단 후 불량회원으로 이용정지
                            처리됩니다.</span
                        >
                    </div>
                </div>
            </div>
            <v-dialog v-model="dialog" width="auto" :persistent="true">
                <v-card
                    v-if="!!selectedItem"
                    class="d-flex flex-column"
                    style="padding-block: 30px; background-color: #FFFFFF; box-shadow: 0px 4px 4px 0px #60E0E0; width: 309px; height: 400px; border-radius: 16px; line-height: 1.2;"
                >
                    <div class="d-flex justify-center align-center" style="background: #60E0E0; width: 100%; height: 60px; margin-bottom: 24px;">
                        <span style="font-size: 30px; color: #FFFFFF; font-weight: 400;">Plotting</span>
                    </div>
                    <div
                        class="d-flex justify-center align-center flex-column"
                        style="height: 200px; margin-inline: 26px; margin-bottom: 26px; width: 256px; background: #F1F1F1; border-radius: 16px; text-align: center;"
                    >
                        <span style="font-size: 18px; font-weight: 700; ">🏧 상품 결제창 🏧</span>
                        <br />
                        <div style="width: 100%; display: flex; justify-content: center; align-items: center; font-weight: 700; gap: 20px;">
                            <span style="font-size: 18px;">{{ selectedItem.title }}</span>
                            <div style="display: flex; gap: 5px;">
                                <div style="display: flex; flex-direction: column; justify-content: center; color: #FF0000; font-size: 12px;">
                                    <span>{{ selectedItem.sale }}%</span>
                                    <span>OFF</span>
                                </div>
                                <div style="display: flex; flex-direction: column; justify-content: center; font-size: 16px;">
                                    <span style="text-decoration: line-through; ">{{ selectedItem.originPrice }}</span>
                                    <span style="color: #FF0000;">{{ selectedItem.discountPrice }}</span>
                                </div>
                            </div>
                        </div>
                        <br />
                        <span style="font-size: 13px; font-weight: 600;">입금 후 1시간 내 확인하여,</span>
                        <span style="font-size: 13px; font-weight: 600;">매칭권 충전 및 확인 문자 발송해드려요 :)</span>
                    </div>
                    <div class="d-flex justify-center w-100">
                        <v-btn
                            color="#60E0E0"
                            style="border: 1px solid #60E0E0; border-radius: 24px; width: 268px; height: 44px; box-shadow: none; "
                            @click="clickedText"
                        >
                            <span style="text-align: center; color:#FFFFFF; font-weight: 700; font-size: 20px; line-height: 24px;"
                                >문자로 안내받기</span
                            >
                        </v-btn>
                    </div>
                </v-card>
            </v-dialog>
        </main>
        <main-navigation />
    </div>
</template>

<style scoped></style>
