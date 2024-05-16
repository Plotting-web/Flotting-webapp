<script setup>
import HeartIcon from "@/components/icon/HeartIcon.vue";

import AccountIcon from "@/components/icon/AccountIcon.vue";
import PassIcon from "@/components/icon/PassIcon.vue";
</script>

<template>
    <div class="footer-layout">
        <footer>
            <v-btn class="footer-btn" color="#60e0e0" href="/dashboard">
                <div class="footer-btn-content">
                    <account-icon width="39" height="39" />
                    <span class="footer-btn-text">
                        이번주 프로필
                    </span>
                </div>
            </v-btn>
            <div class="footer-divider" />
            <v-btn class="footer-btn" color="#60e0e0" href="/state">
                <div class="footer-btn-content">
                    <heart-icon />
                    <span class="footer-btn-text">
                        좋아요 현황
                    </span>
                </div>
            </v-btn>
        </footer>
    </div>
</template>

<style scoped>
.footer-layout {
    width: 100%;
    position: fixed;
    bottom: 0;
    height: 80px;
    background-color: #60e0e0;
    z-index: 1000;
}

footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-inline: auto;
    height: 100%;
    gap: 0;
    max-width: 500px;
    min-width: 320px;
}

.footer-btn {
    width: calc(50% - 1px);
    height: 100%;
    border-radius: 0;
    box-shadow: none;
}

.footer-btn-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
}

.footer-btn-text {
    color: white;

    font-weight: bold;
    font-size: 14px;
    letter-spacing: 0;
}

.footer-divider {
    width: 2px;
    height: 100%;
    background-color: white;
}
</style>
