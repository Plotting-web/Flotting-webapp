import { defineStore } from "pinia";
import { ref } from "vue";

export const signupInfoStore = defineStore(
    "signupInfoStore",
    () => {
        const name = ref(""); // 이름
        const birthday = ref(""); // 생년월일
        const height = ref(150); // 키
        const gender = ref(""); // 성별
        const location = ref(""); // 거주지
        const detailLocation = ref(""); // 상세 거주지
        const appliedPath = ref(""); // 신청 경로
        const recommendUserName = ref(""); // 추천인
        const lifeStyle = ref(""); // 세계관 질문 1
        const somethingWantToSay = ref(""); // 세계관 질문 2
        const nickName = ref(""); // 닉네임
        const job = ref(""); // 직업
        const detailJob = ref(""); // 상세 직업
        const education = ref(""); // 학력
        const smoking = ref(""); // 흡연
        const drinking = ref(""); // 음주
        const mbti = ref(["", "", "", ""]); // mbti
        const character = ref([]); // 성격
        const hobby = ref([]); // 취미
        const preferredDate = ref(""); // 데이트 유형
        const profileImages = ref(Array.from({ length: 6 }));
        const identityVerification = ref("");

        const getTotal = () => {
            return {
                name: name.value,
                birthday: birthday.value,
                height: height.value,
                gender: gender.value,
                location: location.value,
                detailLocation: detailLocation.value,
                appliedPath: appliedPath.value,
                recommendUserName: recommendUserName.value,
                lifeStyle: lifeStyle.value,
                somethingWantToSay: somethingWantToSay.value,
                nickName: nickName.value,
                job: job.value,
                detailJob: detailJob.value,
                education: education.value,
                smoking: smoking.value === "Y",
                drinking: drinking.value,
                mbti: mbti.value.join(""),
                character: character.value,
                hobby: hobby.value,
                preferredDate: preferredDate.value,
                profileImages: profileImages.value,
                identityVerification: identityVerification.value
            };
        };

        const reset = () => {
            name.value = "";
            birthday.value = "";
            height.value = 150;
            gender.value = "";
            location.value = "";
            detailLocation.value = "";
            appliedPath.value = "";
            recommendUserName.value = "";
            lifeStyle.value = "";
            somethingWantToSay.value = "";
            nickName.value = "";
            job.value = "";
            detailJob.value = "";
            education.value = "";
            smoking.value = "";
            drinking.value = "";
            mbti.value = ["", "", "", ""];
            character.value = [];
            hobby.value = [];
            preferredDate.value = "";
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
            !!info.birthday && (birthday.value = info.birthday);
            !!info.height && (height.value = info.height);
            !!info.gender && (gender.value = info.gender);
            !!info.location && (location.value = info.location);
            !!info.detailLocation && (detailLocation.value = info.detailLocation);
            !!info.appliedPath && (appliedPath.value = info.appliedPath);
            !!info.recommendUserName && (recommendUserName.value = info.recommendUserName);
            !!info.lifeStyle && (lifeStyle.value = info.lifeStyle);
            !!info.somethingWantToSay && (lifeStyle.value = info.somethingWantToSay);
            !!info.nickName && (nickName.value = info.nickName);
            !!info.job && (job.value = info.job);
            !!info.detailJob && (detailJob.value = info.detailJob);
            !!info.education && (education.value = info.education);
            !!info.smoking && (smoking.value = info.smoking);
            !!info.drinking && (drinking.value = info.drinking);
            !!info.mbti && (mbti.value = info.mbti.split(""));
            !!info.character && (character.value = info.character);
            !!info.hobby && (hobby.value = info.hobby);
            !!info.preferredDate && (preferredDate.value = info.preferredDate);
            // profileImages.value = Array.from({ length: 6 });
            // identityVerification.value = "";
        };

        return {
            name,
            birthday,
            height,
            gender,
            location,
            detailLocation,
            appliedPath,
            recommendUserName,
            lifeStyle,
            somethingWantToSay,
            nickName,
            job,
            detailJob,
            education,
            smoking,
            drinking,
            mbti,
            character,
            hobby,
            preferredDate,
            profileImages,
            identityVerification,
            getTotal,
            reset,
            setProfileImage,
            setIdentityVerification,
            set
        };
    },
    {
        persist: {
            enabled: true,
            storage: sessionStorage,
            strategies: [
                {
                    key: "signup"
                }
            ]
        }
    }
);
