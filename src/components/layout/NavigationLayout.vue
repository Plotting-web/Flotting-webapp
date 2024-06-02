<script setup>
import MainNavigation from "@/components/layout/MainNavigation.vue";
</script>

<template>
    <router-view v-slot="{ Component }">
        <component :is="Component" />
    </router-view>
    <main-navigation />
</template>

<style scoped></style>
