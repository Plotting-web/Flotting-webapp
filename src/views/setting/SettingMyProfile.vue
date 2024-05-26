<script setup>
import MainHeader from "@/components/layout/MainHeader.vue";
import MainBody from "@/components/layout/MainBody.vue";
import UserProfile from "@/components/profile/UserProfile.vue";
</script>

<template>
    <main-header start="back" end="store" title />
    <main-body is-header>
        <user-profile status="self" />
    </main-body>
</template>

<style scoped></style>
