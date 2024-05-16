import { defineStore } from "pinia";
import { ref } from "vue";

export const userProfileDialogStore = defineStore("signupInfoStore", () => {
    const dialog = ref(false);
    const status = ref("");

    return {
        dialog,
        status
    };
});
