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
    active: {
        type: Boolean,
        default: false
    }
});
</script>

<template>
    <div
        v-if="active"
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
            text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
        "
        :style="[!!src && `background-image: url(${src})`, radius && 'border-radius: 16px']"
    >
        <span v-show="!!title">{{ title }}</span>
        <span v-show="!!subTitle">{{ subTitle }}</span>
    </div>
    <div
        v-else
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
    >
        <plot-logo width="64" height="32" style="margin-bottom: 6px;" />
        <span>휴면한 회원입니다</span>
    </div>
</template>

<style scoped></style>
