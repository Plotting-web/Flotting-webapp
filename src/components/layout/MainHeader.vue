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
    <div class="header-layout">
        <header>
            <div class="header-default header-side">
                <v-btn v-if="start === 'setting'" icon="true" color="#60e0e0" href="/setting">
                    <cog-icon width="35" height="35" />
                </v-btn>
                <v-btn v-else-if="start === 'back'" icon="true" color="#60e0e0" @click="router.go(-1)">
                    <v-icon icon="mdi-arrow-left" size="large" color="white"></v-icon>
                </v-btn>
            </div>
            <div class="header-default header-middle">
                <v-btn v-if="title" color="#60e0e0" href="/dashboard" variant="text">
                    <plot-logo width="63" height="30" />
                </v-btn>
                <plot-logo v-else width="63" height="30" />
            </div>
            <div class="header-default header-side">
                <v-btn v-if="end === 'store'" icon="true" color="#60e0e0" href="/store">
                    <home-icon />
                </v-btn>
                <div v-else-if="end === 'mail'" class="store-layout">
                    <div class="store-title">
                        <v-icon icon="mdi-email-open" color="white" size="30" />
                        <span class="store-title-text">
                            매칭권
                        </span>
                    </div>
                    <span class="store-count">
                        5
                    </span>
                </div>
            </div>
        </header>
    </div>
</template>

<style scoped>
.v-btn {
    box-shadow: none;
}

.header-layout {
    width: 100%;
    position: fixed;
    top: 0;
    height: 60px;
    background-color: #60e0e0;
    z-index: 1000;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 16px;
    gap: 16px;
    margin-inline: auto;
    height: 100%;
    max-width: 430px;
    min-width: 320px;
}

.header-side {
    width: 25%;
}

.header-middle {
    width: 100%;
}

.header-default {
    display: flex;
    justify-content: center;
    align-items: center;
}

.store-layout {
    display: flex;
    gap: 3px;
}

.store-title {
    display: flex;
    flex-direction: column;
}

.store-title-text {
    color: #ffffff;
    font-weight: 700;
    text-align: center;
    font-size: 10px;
}

.store-count {
    color: #ffffff;
    font-weight: 700;
    text-align: center;
    font-size: 25px;
}
</style>
