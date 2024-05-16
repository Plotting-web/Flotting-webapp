<script setup>
import HomeIcon from "@/components/icon/HomeIcon.vue";
import CogIcon from "@/components/icon/CogIcon.vue";
import router from "@/router";
import PlotLogo from "@/components/icon/PlotLogo.vue";

defineProps({
    start: {
        type: String,
        default: ""
    },
    title: {
        type: Boolean,
        default: false
    },
    end: {
        type: String,
        default: ""
    }
});
</script>

<template>
    <header>
        <article class="d1">
            <div class="d1-1">
                <v-btn v-if="start === 'setting'" icon="true" color="#60e0e0" href="/setting">
                    <cog-icon width="35" height="35" />
                </v-btn>
                <v-btn v-else-if="start === 'back'" icon="true" color="#60e0e0" @click="router.go(-1)">
                    <v-icon icon="mdi-arrow-left" size="large" color="white"></v-icon>
                </v-btn>
            </div>
            <div class="d1-2">
                <v-btn v-if="title" color="#60e0e0" href="/dashboard" variant="text">
                    <plot-logo width="63" height="30" />
                </v-btn>
                <plot-logo v-else width="63" height="30" />
            </div>
            <div class="d1-3">
                <v-btn v-if="end === 'store'" icon="true" color="#60e0e0" href="/store">
                    <home-icon />
                </v-btn>
                <div v-else-if="end === 'mail'" class="d1-3-1">
                    <div class="d1-3-1-1">
                        <v-icon icon="mdi-email-open" color="white" size="30" />
                        <span class="s1">매칭권</span>
                    </div>
                    <span class="s2">5</span>
                </div>
            </div>
        </article>
    </header>
</template>

<style scoped>
header {
    width: 100%;
    position: fixed;
    top: 0;
    height: 60px;
    background-color: #60e0e0;
    z-index: 1000;
}

.v-btn {
    box-shadow: none;
}

article {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 16px;
    gap: 16px;
    margin-inline: auto;
    height: 100%;
    max-width: 500px;
    min-width: 320px;
}

.d1-1 {
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.d1-2 {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.d1-3 {
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.d1-3-1 {
    display: flex;
    gap: 3px;
}

.d1-3-1-1 {
    display: flex;
    flex-direction: column;
}

.s1 {
    color: #ffffff;
    font-weight: 700;
    font-size: 10px;
    text-align: center;
}

.s2 {
    color: #ffffff;
    font-weight: 700;
    font-size: 25px;
    text-align: center;
}
</style>
