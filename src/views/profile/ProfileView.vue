<script setup>
import MainHeader from "@/components/layout/MainHeader.vue";
import MainBody from "@/components/layout/MainBody.vue";
import UserProfile from "@/components/view/UserProfile.vue";
</script>

<template>
    <main-header start="back" end="store" title />
    <main-body is-header>
        <user-profile />
    </main-body>
</template>

<style scoped></style>
