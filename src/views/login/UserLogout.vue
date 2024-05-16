<script setup>
import { userInfoStore } from "@/store/user/userInfoStore";
import router from "@/router";
import { signupInfoStore } from "@/views/signup/store/singupInfoStore";

userInfoStore().resetUserInfo();
signupInfoStore().reset();
router.push("/");
</script>

<template>
    <div></div>
</template>

<style scoped></style>
