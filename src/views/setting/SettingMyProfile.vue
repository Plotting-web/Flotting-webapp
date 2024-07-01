<script setup>
import MainHeader from "@/components/layout/MainHeader.vue";
import MainBody from "@/components/layout/MainBody.vue";
import UserProfile from "@/components/profile/UserProfile.vue";
import { userStore } from "@/store/userStore";
</script>

<template>
    <main-header start="back" end="store" title />
    <main-body is-header>
        <user-profile status="self" :user-id="userStore().getId()" />
    </main-body>
</template>

<style scoped></style>
