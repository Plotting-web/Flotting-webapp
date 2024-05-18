<script setup>
import MainHeader from "@/components/layout/MainHeader.vue";
import MainBody from "@/components/layout/MainBody.vue";
import MainNavigation from "@/components/layout/MainNavigation.vue";
</script>

<template>
    <main-header start="setting" end="store" title />
    <main-body is-header is-navigation>
        <div class="view-layout">
            <div class="card-layout">
                <v-btn to="/setting/my-profile" class="setting-btn">
                    <div class="setting-btn-content">
                        <p>나의 프로필</p>
                        <p>확인하기!</p>
                    </div>
                </v-btn>
                <v-btn to="/setting/inquire" class="setting-btn">
                    <div class="setting-btn-content">
                        <p>매니저에게</p>
                        <p>문의하기!</p>
                    </div>
                </v-btn>
                <v-btn to="/setting/notice" class="setting-btn">
                    <div class="setting-btn-content">
                        <p>공지 사항</p>
                    </div>
                </v-btn>
                <v-btn to="/setting/invite" class="setting-btn">
                    <div class="setting-btn-content">
                        <p>매칭권 무료</p>
                        <p>이벤트!</p>
                    </div>
                </v-btn>
                <v-btn to="/setting/block" class="setting-btn">
                    <div class="setting-btn-content">
                        <p>지인 차단</p>
                    </div>
                </v-btn>
                <v-btn to="/setting/status" class="setting-btn">
                    <div class="setting-btn-content">
                        <p>상태 변경</p>
                    </div>
                </v-btn>
            </div>
        </div>
    </main-body>
</template>

<style scoped>
.view-layout {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-inline: 24px;
    padding-top: 36px;
}

.card-layout {
    display: flex;
    flex-direction: column;
    width: 100%;
    border-radius: 16px;
    box-shadow: 4px 4px 10px 0px #60e0e0;
    padding: 36px 56px;
    gap: 16px;
}
.setting-btn {
    width: 100%;
    height: 76px;
    box-shadow: 0px 4px 4px 0px #00000040;
    background: #f1f1f1;
    border-radius: 16px;
}

.setting-btn-content {
    text-align: center;
    font-size: 23px;
    font-weight: 900;
    letter-spacing: 0;
}
</style>
