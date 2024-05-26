<script setup>
import PlotLogo from "@/components/icon/PlotLogo.vue";

defineProps({
    src: {
        type: String,
        default: null
    },
    title: {
        type: String,
        default: null
    },
    subTitle: {
        type: String,
        default: null
    },
    radius: {
        type: Boolean,
        default: false
    },
    variant: {
        type: String,
        default: "default"
    },
    matched: {
        type: Boolean,
        default: false
    }
});
</script>

<template>
    <div
        v-if="variant === 'dormant'"
        style="
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: #60e0e0;
            color: white;
            font-weight: bold;
            font-size: 10px;
        "
        :style="[radius && 'border-radius: 16px']"
    >
        <plot-logo width="64" height="32" style="margin-bottom: 6px;" />
        <span>휴면한 회원입니다</span>
    </div>
    <div
        v-else
        style="
            width: 100%;
            aspect-ratio: 1;
            background-color: #f1f1f1;
            background-position: 50%;
            background-size: cover;
            display: flex;
            flex-direction: column;
            justify-content: end;
            align-items: start;
            padding-left: 24px;
            padding-bottom: 12px;
            font-size: 18px;
            font-weight: bold;
            color: white;
            text-shadow: 0px 0px 2px black;
            position: relative;
        "
        :style="[!!src && `background-image: url(${src})`, radius && 'border-radius: 16px', variant === 'compact' && 'font-size: 10px']"
    >
        <span v-show="!!title">{{ title }}</span>
        <span v-show="!!subTitle">{{ subTitle }}</span>
        <v-icon v-show="matched" icon="mdi-heart" style="position: absolute; top: 5%; right: 5%;" color="#FF0000" />
    </div>
</template>

<style scoped></style>
