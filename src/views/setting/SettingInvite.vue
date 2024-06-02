<script setup>
import MainHeader from "@/components/layout/MainHeader.vue";
import MainBody from "@/components/layout/MainBody.vue";

const onClickedCopyButton = () => {
    navigator.clipboard.writeText("test");
};
</script>

<template>
    <main-header start="back" end="store" title />
    <main-body is-header is-navigation>
        <div class="view-layout">
            <span class="title">매칭권 무료 이벤트</span>
            <div class="sub-title">
                <p>친구를 초대하면 둘 다</p>
                <p>매칭권 1회를 무료로 제공해요!</p>
            </div>
            <div class="body-layout">
                <div class="content">
                    <p>지인에게 링크를 공유해요!</p>
                    <v-btn class="content-btn" @click="onClickedCopyButton">링크 복사하기</v-btn>
                    <div>
                        <p>프로필 등록 시 추천인 코드 必:</p>
                        <p>지인 성함 입력!</p>
                    </div>
                </div>
            </div>
        </div>
    </main-body>
</template>

<style scoped>
.view-layout {
    width: 100%;
    padding: 28px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
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

.sub-title {
    width: 100%;
    padding-block: 32px;
    font-weight: 900;
    font-size: 23px;
    text-align: center;
    border-radius: 16px;
    box-shadow: 0px 4px 4px 0px #60e0e0;
}

.body-layout {
    width: 100%;
    box-shadow: 4px 4px 10px 0px #60e0e0;
    border-radius: 16px;
    padding: 24px;
}

.content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: #f1f1f1;
    border-radius: 16px;
    font-weight: 700;
    font-size: 20px;
    text-align: center;
    padding-block: 32px;
    gap: 40px;
}

.content-btn {
    width: 172px;
    height: 44px;
    background-color: #60e0e0;
    border: 1px solid #60e0e0;
    box-shadow: 0px 4px 4px 0px #00000040;
    border-radius: 24px;
    color: #ffffff;
    font-weight: 700;
    font-size: 20px;
    text-align: center;
}
</style>
