<script setup>
import HeartIcon from "@/components/icon/HeartIcon.vue";

import AccountIcon from "@/components/icon/AccountIcon.vue";
</script>

<template>
    <footer class="position-fixed w-100" style="bottom: 0; height: 80px; background-color: #60e0e0; z-index: 1000;">
        <div class="d-flex justify-space-between align-center mx-auto h-100 ga-0" style="max-width: 500px; min-width: 320px;">
            <v-btn height="100%" style="width: calc(50% - 1px); border-radius: 0; box-shadow: none;" color="#60e0e0" href="/dashboard">
                <div class="d-flex flex-column justify-center align-center" style="gap: 4px;">
                    <account-icon width="39" height="39" />
                    <span class="text-white font-weight-bold" style="font-size: 14px; letter-spacing: 0;">이번주 프로필</span>
                </div>
            </v-btn>
            <div style="width: 2px; height: 100%; background-color: white;"></div>
            <v-btn height="100%" style="width: calc(50% - 1px); border-radius: 0; box-shadow: none;" color="#60e0e0" href="/state">
                <div class="d-flex flex-column justify-center align-center" style="gap: 4px;">
                    <heart-icon></heart-icon>
                    <span class="text-white font-weight-bold" style="font-size: 14px; letter-spacing: 0;">좋아요 현황</span>
                </div>
            </v-btn>
        </div>
    </footer>
</template>

<style scoped></style>
