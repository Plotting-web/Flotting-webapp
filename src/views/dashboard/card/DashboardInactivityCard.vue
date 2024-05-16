<script setup>
import PlotLogo from "@/components/icon/PlotLogo.vue";
</script>

<template>
    <v-card width="100%">
        <div class="d1">
            <plot-logo width="155" height="78" />
            <span class="s1">휴면한 회원입니다</span>
        </div>
    </v-card>
</template>

<style scoped>
.v-card {
    height: 568px;
    box-shadow: 4px 4px 10px 0px #60e0e0;
    border-radius: 16px;
    padding: 16px;
}

.d1 {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #60e0e0;
    border-radius: 16px;
}

.s1 {
    text-align: center;
    color: white;
    font-weight: 700;
    font-size: 23px;
}
</style>
