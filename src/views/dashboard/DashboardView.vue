<script setup>
import { onBeforeMount, ref } from "vue";
import UserProfileImageCard from "@/components/card/UserProfileImageCard.vue";
import { fetchApiResource } from "@/axios/commonApi";

import MainHeader from "@/components/layout/MainHeader.vue";
import MainBody from "@/components/layout/MainBody.vue";
import DashboardDoneCard from "@/views/dashboard/card/DashboardDoneCard.vue";
import DashboardFindingCard from "@/views/dashboard/card/DashboardFindingCard.vue";
import DashboardDormantCard from "@/views/dashboard/card/DashboardDormantCard.vue";

const tab = ref(null);

const list = ref([]);

onBeforeMount(() => {
    signup();
});
const signup = async () => {
    try {
        await fetchApiResource("test", "GET");
    } catch (error) {
        console.log(error);
    }
};
</script>

<template>
    <main-header start="setting" end="store" />
    <main-body is-header is-navigation>
        <div class="view-layout">
            <div class="view-title">
                이번주 프로필
            </div>
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
    padding: 32px 24px;
    gap: 24px;
}

.view-title {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: bold;
    padding-block: 15px;
    background-color: #60e0e0b2;
    box-shadow: 4px 4px 10px 0 #60e0e0;
    border-radius: 16px;
    font-size: 25px;
}
</style>
