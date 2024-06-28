<script setup>
import { onBeforeMount, ref } from "vue";
import UserProfileImageCard from "@/components/card/UserProfileImageCard.vue";

import MainHeader from "@/components/layout/MainHeader.vue";
import MainBody from "@/components/layout/MainBody.vue";
import DashboardDoneCard from "@/views/dashboard/card/DashboardDoneCard.vue";
import DashboardFindingCard from "@/views/dashboard/card/DashboardFindingCard.vue";
import DashboardDormantCard from "@/views/dashboard/card/DashboardDormantCard.vue";

const list = ref([]);
</script>

<template>
    <main-header start="setting" end="store" />
    <main-body is-header is-navigation>
        <div class="view-layout">
            <p class="view-title">
                이번주 프로필
            </p>
            <user-profile-image-card to="/profile" />
            <user-profile-image-card to="/profile" />
            <user-profile-image-card to="/profile" />
            <dashboard-dormant-card />
            <dashboard-done-card />
            <dashboard-finding-card />
        </div>
    </main-body>
</template>

<style scoped>
.view-layout {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 24px;
    gap: 24px;
}

.view-title {
    width: 260px;
    height: 52px;
    color: white;
    font-weight: bold;
    padding-block: 15px;
    background: rgba(96, 224, 224, 0.7);
    box-shadow: 4px 4px 10px 0 #60e0e0;
    border-radius: 16px;
    font-size: 20px;
    text-align: center;
}
</style>
