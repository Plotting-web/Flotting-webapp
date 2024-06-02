<script setup>
import PlotLogo from "@/components/icon/PlotLogo.vue";
</script>

<template>
    <v-card class="dialog-card-layout">
        <div class="dialog-card-header">
            <plot-logo width="70" height="35" />
        </div>
        <slot></slot>
    </v-card>
</template>

<style scoped>
.dialog-card-layout {
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    background-color: #ffffff;
    width: 310px;
    height: fit-content;
    border-radius: 16px !important;
    box-shadow: 0px 4px 4px #60e0e0;
}

.dialog-card-header {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #60e0e0;
    width: 100%;
    height: 60px;
}
</style>
