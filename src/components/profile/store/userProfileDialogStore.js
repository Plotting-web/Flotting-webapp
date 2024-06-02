import { defineStore } from "pinia";
import { ref } from "vue";

export const userProfileDialogStore = defineStore("signupInfoStore", () => {
    const dialog = ref(false);
    const status = ref("");

    const reset = () => {
        dialog.value = false;
        status.value = "";
    };

    return {
        dialog,
        status,
        reset
    };
});
