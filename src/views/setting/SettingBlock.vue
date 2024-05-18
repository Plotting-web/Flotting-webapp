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
            <span class="title">지인 차단</span>
            <div class="sub-title">
                <p>연락처에 저장된 지인들을</p>
                <p>소개 상대에서 제외 합니다</p>
            </div>
            <div class="body-layout">
                <div class="content">
                    <p>현재 해당 기능개발 중입니다!</p>
                    <br />
                    <p>완료되면 해당 소식을</p>
                    <p>문자로 알려드리겠습니다 :)</p>
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
    height: 300px;
    background: #f1f1f1;
    border-radius: 16px;
    font-weight: 700;
    font-size: 20px;
    text-align: center;
    padding-block: 32px;
}
</style>
