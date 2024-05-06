<script setup>
import { userInfoStore } from "@/store/user/userInfoStore";
import router from "@/router";
import { signupInfoStore } from "@/views/signup/store/singupInfoStore";

const userInfo = userInfoStore();
const signupInfo = signupInfoStore();
userInfo.resetUserInfo();
signupInfo.reset();
router.push("/");
</script>

<template>
    Logout
</template>

<style scoped></style>
