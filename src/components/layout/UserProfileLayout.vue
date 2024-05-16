<script setup>
import MainHeader from "@/components/layout/MainHeader.vue";
</script>

<template>
    <div class="w-100 h-100">
        <main-header start="back" end="store" title />
        <div class="w-100 h-100" style="padding-top: 60px;">
            <div class="mx-auto d-flex flex-column pa-6" style="max-width: 500px; min-width: 320px; gap: 24px;">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
