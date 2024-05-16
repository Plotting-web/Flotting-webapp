<script setup>
import MainHeader from "@/components/layout/MainHeader.vue";
import landingIntroImage from "@/images/LandingIntro.png";
import MainBody from "@/components/layout/MainBody.vue";
</script>

<template>
    <main-header start="back" />
    <main-body is-header>
        <img :src="landingIntroImage" alt="" width="100%" />
    </main-body>
</template>

<style scoped></style>
