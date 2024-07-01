import { ref } from "vue";
import { defineStore } from "pinia";

export const userStore = defineStore(
    "userStore",
    () => {
        const userId = ref(0);
        const name = ref("");
        const birthdate = ref("");
        const genderType = ref("");
        const userStatusType = ref("");
        const profileRegisteredAt = ref(0);

        const reset = () => {
            userId.value = 0;
            name.value = "";
            birthdate.value = "";
            genderType.value = "";
            userStatusType.value = "";
            profileRegisteredAt.value = 0;
        };

        const get = () => {
            return {
                userId: userId.value,
                name: name.value,
                birthdate: birthdate.value,
                genderType: genderType.value,
                userStatusType: userStatusType.value,
                profileRegisteredAt: profileRegisteredAt.value
            };
        };

        const set = data => {
            !!data.userId && (userId.value = data.userId);
            !!data.name && (name.value = data.name);
            !!data.birthdate && (birthdate.value = data.birthdate);
            !!data.genderType && (genderType.value = data.genderType);
            !!data.userStatusType && (userStatusType.value = data.userStatusType);
            !!data.profileRegisteredAt && (profileRegisteredAt.value = data.profileRegisteredAt);
        };

        const getStatus = () => userStatusType.value;
        const getId = () => userId.value;

        const log = () => {
            console.log("User Store >> ", get());
        };

        return {
            userId,
            name,
            birthdate,
            genderType,
            userStatusType,
            profileRegisteredAt,
            get,
            set,
            reset,
            getStatus,
            getId,
            log
        };
    },
    {
        persist: {
            storage: localStorage
        }
    }
);
