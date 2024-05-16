import { createWebHistory, createRouter } from "vue-router";
import DashboardView from "@/views/dashboard/DashboardView.vue";
import UserLogin from "@/views/login/UserLogin";
import SignupSimple from "@/views/signup/SignupSimple.vue";
import SettingMain from "@/views/setting/SettingMain.vue";
import SettingInquire from "@/views/setting/SettingInquire.vue";
import SettingInvite from "@/views/setting/SettingInvite.vue";
import SettingBlock from "@/views/setting/SettingBlock.vue";
import SettingStatus from "@/views/setting/SettingStatus.vue";
import StoreView from "@/views/store/StoreView.vue";
import TestMain from "@/views/test/TestMain.vue";
import SettingMyProfile from "@/views/setting/SettingMyProfile.vue";
import SignupGuide from "@/views/signup/SignupGuide.vue";
import SignupFirst from "@/views/signup/SignupFirst.vue";
import SignupSecond from "@/views/signup/SignupSecond.vue";
import SignupThird from "@/views/signup/SignupThird.vue";
import SignupPhoto from "@/views/signup/SignupPhoto.vue";
import SignupEnd from "@/views/signup/SignupEnd.vue";
import { userInfoStore } from "@/store/user/userInfoStore";
import LandingMain from "@/views/landing/LandingMain.vue";
import LandingIntro from "@/views/landing/LandingIntro.vue";
import UserLogout from "@/views/login/UserLogout.vue";
import UserState from "@/views/state/UserState.vue";
import UserLoginTemp from "@/views/login/UserLoginTemp.vue";
import NavigationLayout from "@/components/layout/NavigationLayout.vue";
import ProfileView from "@/views/profile/ProfileView.vue";

const routes = [
    { path: "/login", component: UserLogin },
    { path: "/login/temp", component: UserLoginTemp },
    { path: "/logout", component: UserLogout },
    { path: "/signupTest", component: SignupSimple },
    {
        path: "/",
        component: LandingMain
    },
    {
        path: "/intro",
        component: LandingIntro
    },
    {
        path: "/",
        component: NavigationLayout,
        children: [
            {
                path: "dashboard",
                component: DashboardView
            },
            {
                path: "state",
                component: UserState
            },
            {
                path: "setting",
                component: SettingMain
            },
            {
                path: "setting/inquire",
                component: SettingInquire
            },
            {
                path: "setting/invite",
                component: SettingInvite
            },
            {
                path: "setting/block",
                component: SettingBlock
            },
            {
                path: "setting/status",
                component: SettingStatus
            }
        ]
    },
    {
        path: "/setting/my-profile",
        component: SettingMyProfile
    },
    {
        path: "/profile",
        component: ProfileView
    },

    {
        path: "/signup/guide",
        component: SignupGuide
    },
    {
        path: "/signup/1",
        component: SignupFirst
    },
    {
        path: "/signup/2",
        component: SignupSecond
    },
    {
        path: "/signup/3",
        component: SignupThird
    },
    {
        path: "/signup/photo",
        component: SignupPhoto
    },
    {
        path: "/signup/end",
        component: SignupEnd
    },
    {
        path: "/test",
        component: TestMain
    },
    {
        path: "/store",
        component: StoreView
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from) {
        if (to.fullPath.includes("signup")) {
            return { top: 0 };
        }
    }
});
router.beforeEach((to, from, next) => {
    const userStore = userInfoStore();
    if (!["/login", "/signupTest", "/", "/intro", "/login/temp"].includes(to.path) && !userStore.getUserAccessToken()) {
        next("/login/temp");
    } else {
        next();
    }
});
export default router;
