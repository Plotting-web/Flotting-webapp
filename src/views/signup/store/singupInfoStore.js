import { defineStore } from "pinia";
import { ref } from "vue";

export const signupInfoStore = defineStore(
    "signupInfoStore",
    () => {
        const name = ref(""); // 이름
        const birthdate = ref(""); // 생년월일
        const genderType = ref(""); // 성별
        const height = ref(150); // 키
        const residenceType = ref(""); // 주소
        const detailResidence = ref(""); // 상세 주소
        const lifestyle = ref(""); // 세계관 질문 1
        const messageToFuturePartner = ref(""); // 파트터에게 메시지
        const inflowPath = ref(""); // 신청 경로
        const referralCode = ref(""); // 추천인코드
        const nickname = ref(""); // 닉네임
        const occupationType = ref(""); // 직업
        const detailOccupation = ref(""); // 상세 직업
        const educationType = ref(""); // 학력
        const smoking = ref(""); // 흡연
        const drinkFrequencyType = ref(""); // 음주
        const mbti = ref(["", "", "", ""]); // mbti
        const personalities = ref([]); // 성격
        const interests = ref([]); // 취미
        const datePreferenceType = ref(""); // 데이트 유형
        const profileImages = ref(Array.from({ length: 6 }));
        const identityVerification = ref("");

        const get = () => {
            return {
                name: name.value,
                birthdate: birthdate.value,
                genderType: genderType.value,
                height: height.value,
                residenceType: residenceType.value,
                detailResidence: detailResidence.value,
                inflowPath: inflowPath.value,
                referralCode: referralCode.value,
                lifestyle: lifestyle.value,
                messageToFuturePartner: messageToFuturePartner.value,
                nickname: nickname.value,
                occupationType: occupationType.value,
                detailOccupation: detailOccupation.value,
                educationType: educationType.value,
                smoking: smoking.value,
                drinkFrequencyType: drinkFrequencyType.value,
                mbti: mbti.value,
                personalities: personalities.value,
                interests: interests.value,
                datePreferenceType: datePreferenceType.value,
                profileImages: profileImages.value,
                identityVerification: identityVerification.value
            };
        };

        const getRegisterInfo = () => {
            return {
                height: height.value,
                residenceType: residenceType.value,
                detailResidence: detailResidence.value,
                inflowPath: inflowPath.value,
                referralCode: referralCode.value,
                lifestyle: lifestyle.value,
                messageToFuturePartner: messageToFuturePartner.value,
                nickname: nickname.value,
                occupationType: occupationType.value,
                detailOccupation: detailOccupation.value,
                educationType: educationType.value,
                isSmoking: smoking.value === "Y",
                drinkFrequencyType: drinkFrequencyType.value,
                mbti: mbti.value.join(""),
                personalities: personalities.value,
                interests: interests.value,
                datePreferenceType: datePreferenceType.value
            };
        };

        const reset = () => {
            name.value = "";
            birthdate.value = "";
            genderType.value = "";
            height.value = 150;
            residenceType.value = "";
            detailResidence.value = "";
            inflowPath.value = "";
            referralCode.value = "";
            lifestyle.value = "";
            messageToFuturePartner.value = "";
            nickname.value = "";
            occupationType.value = "";
            detailOccupation.value = "";
            educationType.value = "";
            smoking.value = "";
            drinkFrequencyType.value = "";
            mbti.value = ["", "", "", ""];
            personalities.value = [];
            interests.value = [];
            datePreferenceType.value = "";
            profileImages.value = Array.from({ length: 6 });
            identityVerification.value = "";
        };

        const setProfileImage = (idx, val) => {
            profileImages.value[idx] = val;
        };

        const setIdentityVerification = val => {
            identityVerification.value = val;
        };

        const set = info => {
            !!info.name && (name.value = info.name);
            !!info.birthdate && (birthdate.value = info.birthdate);
            !!info.genderType && (genderType.value = info.genderType);
            !!info.height && (height.value = info.height);
            !!info.location && (location.value = info.location);
            !!info.residenceType && (residenceType.value = info.residenceType);
            !!info.detailResidence && (detailResidence.value = info.detailResidence);
            !!info.inflowPath && (inflowPath.value = info.inflowPath);
            !!info.referralCode && (referralCode.value = info.referralCode);
            !!info.lifestyle && (lifestyle.value = info.lifestyle);
            !!info.messageToFuturePartner && (messageToFuturePartner.value = info.messageToFuturePartner);
            !!info.nickname && (nickname.value = info.nickname);
            !!info.occupationType && (occupationType.value = info.occupationType);
            !!info.detailOccupation && (detailOccupation.value = info.detailOccupation);
            !!info.educationType && (educationType.value = info.educationType);
            !!info.smoking && (smoking.value = info.smoking);
            !!info.drinkFrequencyType && (drinkFrequencyType.value = info.drinkFrequencyType);
            !!info.mbti && (mbti.value = info.mbti.split(""));
            !!info.personalities && (personalities.value = info.personalities);
            !!info.interests && (interests.value = info.interests);
            !!info.datePreferenceType && (datePreferenceType.value = info.datePreferenceType);
        };

        const validateImageInfo = () => {
            return !!profileImages.value[0] && !!profileImages.value[2] && !!profileImages.value[4] && !!identityVerification.value;
        };

        const log = () => {
            console.log("SignupInfo Store", get());
        };

        return {
            name,
            birthdate,
            height,
            genderType,
            residenceType,
            detailResidence,
            inflowPath,
            referralCode,
            lifestyle,
            messageToFuturePartner,
            nickname,
            occupationType,
            detailOccupation,
            educationType,
            smoking,
            drinkFrequencyType,
            mbti,
            personalities,
            interests,
            datePreferenceType,
            profileImages,
            identityVerification,
            get,
            reset,
            setProfileImage,
            setIdentityVerification,
            set,
            getRegisterInfo,
            validateImageInfo
        };
    },
    {
        persist: {
            storage: sessionStorage
        }
    }
);
