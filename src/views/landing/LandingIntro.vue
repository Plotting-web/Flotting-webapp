<script setup>
import MainHeader from "@/components/layout/MainHeader.vue";
import landingIntroImage from "@/images/LandingIntro.png";
</script>

<template>
    <div class="w-100 h-100">
        <main-header start="back" end="" :title="false" />
        <main class="w-100 h-100" style="padding-top: 60px;">
            <div class="mx-auto" style="max-width: 390px; min-width: 360px;">
                <img :src="landingIntroImage" alt="" width="100%" />
            </div>
        </main>
    </div>
</template>

<style scoped></style>
