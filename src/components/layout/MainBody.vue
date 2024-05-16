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
    <main
        style="
            width: 100%;
            height: 100%;
        "
        :style="[
            backgroundColor && `background-color: ${backgroundColor}`,
            isHeader && 'padding-top: 60px;',
            isNavigation && 'padding-bottom: 80px;'
        ]"
    >
        <article
            style="
                width: 100%;
                height: 100%;
                margin-inline: auto;
                max-width: 500px;
                min-width: 320px;
            "
        >
            <slot></slot>
        </article>
    </main>
</template>

<style scoped></style>
