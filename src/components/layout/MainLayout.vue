<script setup>
import MainHeader from "@/components/layout/MainHeader.vue";
import MainNavigation from "@/components/layout/MainNavigation.vue";
import MainBody from "@/components/layout/MainBody.vue";
</script>

<template>
    <main-header />
    <main-body is-header is-navigation>
        <router-view v-slot="{ Component }">
            <component :is="Component" />
        </router-view>
    </main-body>
    <main-navigation />
</template>

<style scoped></style>
