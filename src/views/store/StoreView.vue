<script setup>
import MainHeader from "@/components/layout/MainHeader.vue";
import MainBody from "@/components/layout/MainBody.vue";
import MainNavigation from "@/components/layout/MainNavigation.vue";
import { ref } from "vue";
import DialogCard from "@/components/card/DialogCard.vue";

const dialog = ref(null);
const selectedItem = ref(null);

const gender = ref("M");
const sale = ref(true);

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

const manSaleList = [
    {
        title: "매칭권 5회",
        sale: "50",
        originPrice: "338,000",
        discountPrice: "169,000"
    },
    {
        title: "매칭권 3회",
        sale: "50",
        originPrice: "198,000",
        discountPrice: "99 ,000"
    },
    {
        title: "매칭권 1회",
        sale: "50",
        originPrice: "70,000",
        discountPrice: "35,000"
    }
];

const womanSaleList = [
    {
        title: "매칭권 5회",
        sale: "50",
        originPrice: "198,000",
        discountPrice: "99,000"
    },
    {
        title: "매칭권 3회",
        sale: "50",
        originPrice: "115,000",
        discountPrice: "57,500"
    },
    {
        title: "매칭권 1회",
        sale: "50",
        originPrice: "41,000",
        discountPrice: "20,500"
    }
];

const clickedText = () => {
    dialog.value = false;
    selectedItem.value = null;
    alert("문자로 안내해드렸습니다!");
};

const list = sale.value ? (gender.value === "M" ? manSaleList : womanSaleList) : gender.value === "M" ? manList : womanList;
</script>

<template>
    <main-header start="back" end="mail" title />
    <main-body is-header is-navigation>
        <div class="view-layout">
            <p class="title">매칭권 스토어</p>
            <p class="sub-title">새로운 만남을 위해서는 매칭권이 필요해요!</p>
            <div class="description">
                <p style="font-size: 24px;">잔여 매칭권 100% 환불 가능</p>
                <p style="font-size: 15px;">(커플 성사 / 단순 변심 등 사유불문)</p>
            </div>
            <div class="card-layout">
                <div v-show="sale">
                    <p class="event-title">PLOT 최초 가입 EVENT !!</p>
                    <div class="event-text">
                        <p><span style="color: #ff0000;">가입 후 24시간</span>동안만</p>
                        <p>모든 매칭권을 <span style="color: #ff0000;">50% 할인</span>된</p>
                        <p>가격으로 구입 가능합니다</p>
                    </div>
                </div>
                <v-card
                    v-for="(item, i) in list"
                    :key="item.title + item.sale"
                    class="card-default"
                    :style="i === 1 && 'border-color: #FF0000'"
                    @click="
                        () => {
                            dialog = true;
                            selectedItem = item;
                        }
                    "
                >
                    <div class="card-content">
                        <span class="card-title">{{ item.title }}</span>
                        <div class="card-price-layout">
                            <div class="card-price-discount">
                                <span>{{ item.sale }}%</span>
                                <span>OFF</span>
                            </div>
                            <div class="card-price">
                                <span style="text-decoration: line-through; ">{{ item.originPrice }}</span>
                                <span style="color: #FF0000;">{{ item.discountPrice }}</span>
                            </div>
                        </div>
                    </div>
                    <div v-if="i === 1" class="card-topic">
                        인기
                    </div>
                </v-card>
            </div>
            <div class="card-policy">
                <p style="text-align: center; font-weight: 700;">[매칭권 환불 정책]</p>
                <br />
                <p>- 환불 요청은 [설정 - 고객문의]로 문의 남겨주시면 확인 후 환불 도와드립니다.</p>
                <p>- 사용한 매칭권(매칭권 1회 구매 가격 기준), VAT를 제외한 금액으로 3영업일 내에 환불됩니다.</p>
                <p>- 플러팅은 연락처 공개 이후 만남에는 관여하지 않습니다. 매칭 이후 성의없는 연락으로 인한 매칭비 환불은 불가합니다.</p>
                <p>- 매칭 직후 연락 두절 혹은 비매너 회원은 고객문의를 통해 신고해주시면 관리자 판단 후 불량회원으로 이용정지 처리됩니다.</p>
            </div>
        </div>
        <v-dialog v-model="dialog" width="auto" :persistent="true">
            <dialog-card v-if="!!selectedItem">
                <div class="d-card-body">
                    <div class="d-card-body-content">
                        <p style="font-size: 18px; font-weight: 700;">🏧 상품 결제창 🏧</p>
                        <div class="d-price-layout">
                            <p style="font-size: 18px;">{{ selectedItem.title }}</p>
                            <div style="display: flex; gap: 5px;">
                                <div class="d-price-discount-layout">
                                    <span>{{ selectedItem.sale }}%</span>
                                    <span>OFF</span>
                                </div>
                                <div class="d-price">
                                    <span style="text-decoration: line-through; ">{{ selectedItem.originPrice }}</span>
                                    <span style="color: #FF0000;">{{ selectedItem.discountPrice }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="d-description">
                            <p>입금 후 1시간 내 확인하여,</p>
                            <p>매칭권 충전 및 확인 문자 발송해드려요 :)</p>
                        </div>
                    </div>
                    <v-btn class="d-card-body-btn1" @click="clickedText">
                        문자로 안내받기
                    </v-btn>
                </div>
            </dialog-card>
        </v-dialog>
    </main-body>
    <main-navigation />
</template>

<style scoped>
.view-layout {
    width: 100%;
    padding: 28px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.title {
    width: fit-content;
    padding: 8px 40px;
    background: #ffffff;
    box-shadow: 4px 4px 10px #60e0e0;
    border-radius: 16px;
    text-align: center;
    font-weight: 700;
    font-size: 23px;
    margin-bottom: 24px;
}

.sub-title {
    width: fit-content;
    padding: 12px 16px;
    background: #ffffff;
    box-shadow: 4px 4px 10px #60e0e0;
    border-radius: 16px;
    text-align: center;
    font-weight: 700;
    font-size: 15px;
    margin-bottom: 28px;
}

.description {
    text-align: center;
    font-weight: 700;
    color: #35a8aa;
    margin-bottom: 28px;
}

.card-layout {
    width: 100%;
    padding: 24px;
    background: #ffffff;
    box-shadow: 4px 4px 10px #60e0e0;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 48px;
}

.card-default {
    position: relative;
    border: 2px solid #a49999;
    border-radius: 8px;
    font-weight: 700;
    box-shadow: none;
    padding-inline: 20px;
    margin: 0;
}

.card-content {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.card-title {
    color: #35a8aa;
    font-size: 22px;
    font-weight: 700;
}

.card-price-layout {
    display: flex;
    gap: 5px;
}

.card-price-discount {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #ff0000;
    font-size: 12px;
}

.card-price {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 16px;
    font-weight: 700;
}
.card-topic {
    position: absolute;
    right: 18px;
    top: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ff0000;
    width: 30px;
    height: 20px;
    border-radius: 3px;
    color: #ffffff;
    font-weight: 700;
    font-size: 11px;
}
.card-policy {
    width: 100%;
    display: flex;
    flex-direction: column;
    font-size: 15px;
    font-weight: 400;
    color: #8c8c8c;
    gap: 8px;
    padding-inline: 12px;
}

.d-card-body {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 20px;
}

.d-card-body-content {
    width: 100%;
    background-color: #f1f1f1;
    border-radius: 16px;
    padding: 32px 16px;
    font-size: 13px;
    font-weight: 300;
    text-align: center;
    margin-bottom: 28px;
    color: #000000;
    display: flex;
    flex-direction: column;
    gap: 32px;
}

.d-card-body-btn1 {
    width: 100%;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    color: #ffffff;
    height: 44px;
    background: #60e0e0;
    border: 1px solid #60e0e0;
    border-radius: 24px;
    letter-spacing: 0;
}

.d-price-layout {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    gap: 20px;
}

.d-price-discount-layout {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #ff0000;
    font-size: 12px;
}

.d-price {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 16px;
}

.d-description {
    font-size: 13px;
    font-weight: 600;
}

.event-title {
    text-align: center;
    font-weight: 700;
    font-size: 24px;
    color: #ff0000;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-bottom: 20px;
}

.event-text {
    text-align: center;
    font-weight: 700;
    font-size: 20px;
    color: #000000;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
