<script setup>
const props = defineProps({
    value: {
        type: String,
        required: true
    },
    groupValue: {
        type: [String, Array],
        required: true
    },
    title: {
        type: String,
        default: ""
    },
    disabled: {
        type: Boolean,
        default: false
    }
});

const emit = defineEmits(["click"]);

const onClick = () => {
    if (props.disabled) {
        return;
    }
    if (typeof props.groupValue === "string") {
        emit("click", props.groupValue === props.value ? "" : props.value);
    } else {
        emit("click", props.value);
    }
};
</script>

<template>
    <div
        :class="
            `radio ${
                typeof groupValue === 'string' ? groupValue === value && 'radio-clicked' : groupValue.includes(value) && 'radio-clicked'
            } ${disabled && 'disabled'} `
        "
        @click="onClick"
    >
        {{ title }}
    </div>
</template>

<style scoped>
.radio {
    width: 100%;
    height: 48px;
    border: 2px solid #00000066;
    border-radius: 8px;
    background: #ffffff99;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    text-align: center;
    cursor: pointer;
    letter-spacing: 0;
    white-space: pre-wrap;
}

.radio-clicked {
    border: 2px solid #60e0e0;
    background: #60e0e08c;
}

.disabled {
    opacity: 0.5;
}
</style>
