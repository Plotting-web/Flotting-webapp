<script setup>
import { userInfoStore } from "@/store/user/userInfoStore";
import router from "@/router";

const userInfo = userInfoStore();
userInfo.resetUserInfo();

router.push("/");
</script>

<template>
    Logout
</template>

<style scoped></style>
