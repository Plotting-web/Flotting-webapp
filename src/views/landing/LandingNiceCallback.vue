<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

onMounted(() => {
    window.opener.document.getElementById("enc_data").value = route.query.enc_data;
    if (route.query.enc_data !== "undefined" && window.opener.document.getElementById("enc_data").value !== undefined) {
        if (window.opener.document.getElementById("enc_data").value !== "undefined") {
            window.opener.document.getElementById("enc_data").value = route.query.enc_data;
        }
    }
    window.close();
});
</script>

<template>
    Loading
</template>

<style scoped></style>
