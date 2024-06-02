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
                        <p>나의 프로필 확인하기!</p>
                    </div>
                </v-btn>
                <v-btn to="/setting/inquire" class="setting-btn">
                    <div class="setting-btn-content">
                        <p>매니저에게 문의하기!</p>
                    </div>
                </v-btn>
                <v-btn to="/setting/notice" class="setting-btn">
                    <div class="setting-btn-content">
                        <p>공지 사항</p>
                    </div>
                </v-btn>
                <v-btn to="/setting/invite" class="setting-btn">
                    <div class="setting-btn-content">
                        <p>매칭권</p>
                        <p>무료 이벤트!</p>
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
    padding: 36px 24px;
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
    height: 66px;
    box-shadow: 0px 4px 4px rgba(96, 224, 224, 0.55);
    background: #f1f1f1;
    border-radius: 16px;
}

.setting-btn-content {
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0;
}
</style>
