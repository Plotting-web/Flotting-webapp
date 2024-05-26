<script setup>
import router from "@/router";
import { signupInfoStore } from "@/views/signup/store/singupInfoStore";
import { loginStore } from "@/store/loginStore";

loginStore().reset();
signupInfoStore().reset();
router.push("/");
</script>

<template>
    <div></div>
</template>

<style scoped></style>
