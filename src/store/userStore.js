import { ref } from "vue";
import { defineStore } from "pinia";

export const userStore = defineStore(
    "userStore",
    () => {
        const userId = ref(0);
        const name = ref("");
        const birthDate = ref("");
        const gender = ref("");
        const userStatusType = ref("");
        const profileRegisteredAt = ref(0);

        const reset = () => {
            userId.value = 0;
            name.value = "";
            birthDate.value = "";
            gender.value = "";
            userStatusType.value = "";
            profileRegisteredAt.value = 0;
        };

        const get = () => {
            return {
                userId: userId.value,
                name: name.value,
                birthDate: birthDate.value,
                gender: gender.value,
                userStatusType: userStatusType.value,
                profileRegisteredAt: profileRegisteredAt.value
            };
        };

        const set = data => {
            !!data.userId && (userId.value = data.userId);
            !!data.name && (name.value = data.name);
            !!data.birthDate && (birthDate.value = data.birthDate);
            !!data.gender && (gender.value = data.gender);
            !!data.userStatusType && (userStatusType.value = data.userStatusType);
            !!data.profileRegisteredAt && (profileRegisteredAt.value = data.profileRegisteredAt);
        };

        const getStatus = () => userStatusType.value;

        const log = () => {
            console.log("User Store >> ", get());
        };

        return {
            userId,
            name,
            birthDate,
            gender,
            userStatusType,
            profileRegisteredAt,
            get,
            set,
            reset,
            getStatus,
            log
        };
    },
    {
        persist: {
            storage: localStorage
        }
    }
);
