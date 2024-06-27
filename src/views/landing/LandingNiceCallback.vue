<script setup>
import router from "@/router";
import { onMounted } from "vue";

onMounted(() => {
    window.opener.document.getElementById("encData").value = router.query.enc_data;
    if (router.query.enc_data !== "undefined" && window.opener.document.getElementById("encData").value !== undefined) {
        if (window.opener.document.getElementById("encData").value !== "undefined") {
            window.opener.document.getElementById("encData").value = router.query.enc_data;
        }
    }
    window.close();
});
</script>

<template>
    Loading
</template>

<style scoped></style>
