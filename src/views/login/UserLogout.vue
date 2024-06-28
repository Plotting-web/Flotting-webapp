<script setup>
import router from "@/router";
import { signupInfoStore } from "@/views/signup/store/singupInfoStore";
import { userStore } from "@/store/userStore";
import { tokenStore } from "@/store/tokenStore";

tokenStore().reset();
userStore().reset();
signupInfoStore().reset();
router.push("/");
</script>

<template>
    <div></div>
</template>

<style scoped></style>
