<script setup>
defineProps({
    backgroundColor: {
        type: String,
        default: ""
    },
    isHeader: {
        type: Boolean,
        default: false
    },
    isNavigation: {
        type: Boolean,
        default: false
    }
});
</script>

<template>
    <div
        :style="[
            backgroundColor && `background-color: ${backgroundColor}`,
            isHeader && 'padding-top: 60px;',
            isNavigation && 'padding-bottom: 80px;'
        ]"
    >
        <main>
            <slot></slot>
        </main>
    </div>
</template>

<style scoped>
div {
    width: 100%;
    height: 100%;
}

main {
    width: 100%;
    height: 100%;
    margin-inline: auto;
    max-width: 500px;
    min-width: 320px;
}
</style>
