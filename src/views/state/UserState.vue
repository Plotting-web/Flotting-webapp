<script setup>
import PlotLogo from "@/components/icon/PlotLogo.vue";
import MainHeader from "@/components/layout/MainHeader.vue";
import MainBody from "@/components/layout/MainBody.vue";
</script>

<template>
    <main-header start="setting" end="store" title />
    <main-body is-header is-navigation>
        <div class="w-100 pa-6 d-flex flex-column" style="gap: 24px;">
            <div class="d-flex justify-center w-100">
                <div
                    class="text-white font-weight-bold d-flex justify-center align-center"
                    style="width: 100%; height: 63px; background-color: #60E0E0B2; box-shadow: 4px 4px 10px 0px #60E0E0; border-radius: 16px; font-size: 25px;"
                >
                    좋아요 현황
                </div>
            </div>
            <div
                class="d-flex justify-center w-100 px-6 py-10 flex-column"
                style="height: 575px; box-shadow: 4px 4px 10px 0px #60E0E0; border-radius: 16px; gap: 35px; "
            >
                <div class="d-flex flex-column" style="gap: 7px;">
                    <div class="d-flex">
                        <div
                            class="d-flex justify-center align-center"
                            style="width: 124px; height: 24px; border-radius: 16px; box-shadow: 0px 4px 4px 0px #00000040; background: #60E0E0; color:#FFFFFF; font-size: 14px; line-height: 17px; text-align: center; font-weight: 700;"
                        >
                            내가 받은 좋아요
                        </div>
                    </div>
                    <div class="w-100">
                        <div class="w-100" style="height: 3px; background: #F1F1F1; border-radius: 16px;"></div>
                    </div>
                    <div class="d-flex w-auto overflow-x-auto" style="gap: 5px; padding-right: 3px; padding-bottom: 6px;">
                        <v-card style="border-radius: 16px; max-width: 135px; min-width: 135px; aspect-ratio: 1; " to="/profile">
                            <div
                                style="width: 100%; height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; background-color: #60E0E0;"
                            >
                                <plot-logo width="69" height="32" style="margin-bottom: 6px;" />
                                <span style="color: white; font-weight: bold; font-size: 10px;">휴면한 회원입니다</span>
                            </div>
                        </v-card>
                        <v-card style="border-radius: 16px; max-width: 135px; min-width: 135px; aspect-ratio: 1; " to="/profile">
                            <div
                                class="w-100 d-flex flex-column justify-end align-start pl-6 pb-3 font-weight-bold"
                                style="aspect-ratio: 1; background-color: #F1F1F1; background-size: cover;  background-position: 50%; background-image: url('https://i.namu.wiki/i/RmPNdn0sjKx-SYRoeRffcS5pc1rZXK-uA6PQqqU_kLFrqdMVdD3vM9HeF4c_1DLloZ1qu8KZLDwRwO8y-3vNriadzKfcXOeWaQFwwLC2Bn_HxoX1E-clw78tDqSLGLb37UHelCwkxGLeqKIpHvqPtA.webp'); font-size: 10px; text-shadow: -1px 0px white, 0px 1px white, 1px 0px white, 0px -1px white; "
                            >
                                <span>원빈</span>
                                <span>가수, 서울 강남구</span>
                            </div>
                        </v-card>
                        <v-card style="border-radius: 16px; max-width: 135px; min-width: 135px; aspect-ratio: 1; " to="/profile">
                            <div
                                class="w-100 d-flex flex-column justify-end align-start pl-6 pb-3 font-weight-bold"
                                style="aspect-ratio: 1; background-color: #F1F1F1; background-size: cover;  background-position: 50%; background-image: url('https://i.namu.wiki/i/RmPNdn0sjKx-SYRoeRffcS5pc1rZXK-uA6PQqqU_kLFrqdMVdD3vM9HeF4c_1DLloZ1qu8KZLDwRwO8y-3vNriadzKfcXOeWaQFwwLC2Bn_HxoX1E-clw78tDqSLGLb37UHelCwkxGLeqKIpHvqPtA.webp'); font-size: 10px; text-shadow: -1px 0px white, 0px 1px white, 1px 0px white, 0px -1px white; "
                            >
                                <span>원빈</span>
                                <span>가수, 서울 강남구</span>
                            </div>
                        </v-card>
                        <v-card style="border-radius: 16px; max-width: 135px; min-width: 135px; aspect-ratio: 1; margin-right: 2px;" to="/profile">
                            <div
                                class="w-100 d-flex flex-column justify-end align-start pl-6 pb-3 font-weight-bold"
                                style="aspect-ratio: 1; background-color: #F1F1F1; background-size: cover;  background-position: 50%; background-image: url('https://i.namu.wiki/i/RmPNdn0sjKx-SYRoeRffcS5pc1rZXK-uA6PQqqU_kLFrqdMVdD3vM9HeF4c_1DLloZ1qu8KZLDwRwO8y-3vNriadzKfcXOeWaQFwwLC2Bn_HxoX1E-clw78tDqSLGLb37UHelCwkxGLeqKIpHvqPtA.webp'); font-size: 10px; text-shadow: -1px 0px white, 0px 1px white, 1px 0px white, 0px -1px white; "
                            >
                                <span>원빈</span>
                                <span>가수, 서울 강남구</span>
                            </div>
                        </v-card>
                    </div>
                </div>
                <div class="d-flex flex-column" style="gap: 7px;">
                    <div class="d-flex">
                        <div
                            class="d-flex justify-center align-center"
                            style="width: 124px; height: 24px; border-radius: 16px; box-shadow: 0px 4px 4px 0px #00000040; background: #60E0E0; color:#FFFFFF;  font-size: 14px; line-height: 17px; text-align: center; font-weight: 700;"
                        >
                            내가 보낸 좋아요
                        </div>
                    </div>
                    <div class="w-100">
                        <div class="w-100" style="height: 3px; background: #F1F1F1; border-radius: 16px;"></div>
                    </div>
                    <div class="d-flex w-auto overflow-x-auto" style="gap: 5px; padding-right: 3px; padding-bottom: 6px;">
                        <v-card style="border-radius: 16px; max-width: 135px; min-width: 135px; aspect-ratio: 1; " to="/profile">
                            <div
                                class="w-100 d-flex flex-column justify-end align-start pl-6 pb-3 font-weight-bold"
                                style="aspect-ratio: 1; background-color: #F1F1F1; background-size: cover;  background-position: 50%; background-image: url('https://i.namu.wiki/i/RmPNdn0sjKx-SYRoeRffcS5pc1rZXK-uA6PQqqU_kLFrqdMVdD3vM9HeF4c_1DLloZ1qu8KZLDwRwO8y-3vNriadzKfcXOeWaQFwwLC2Bn_HxoX1E-clw78tDqSLGLb37UHelCwkxGLeqKIpHvqPtA.webp'); font-size: 10px; text-shadow: -1px 0px white, 0px 1px white, 1px 0px white, 0px -1px white; "
                            >
                                <span>원빈</span>
                                <span>가수, 서울 강남구</span>
                            </div>
                        </v-card>
                        <v-card style="border-radius: 16px; max-width: 135px; min-width: 135px; aspect-ratio: 1; " to="/profile">
                            <div
                                class="w-100 d-flex flex-column justify-end align-start pl-6 pb-3 font-weight-bold"
                                style="aspect-ratio: 1; background-color: #F1F1F1; background-size: cover;  background-position: 50%; background-image: url('https://i.namu.wiki/i/RmPNdn0sjKx-SYRoeRffcS5pc1rZXK-uA6PQqqU_kLFrqdMVdD3vM9HeF4c_1DLloZ1qu8KZLDwRwO8y-3vNriadzKfcXOeWaQFwwLC2Bn_HxoX1E-clw78tDqSLGLb37UHelCwkxGLeqKIpHvqPtA.webp'); font-size: 10px; text-shadow: -1px 0px white, 0px 1px white, 1px 0px white, 0px -1px white; "
                            >
                                <span>원빈</span>
                                <span>가수, 서울 강남구</span>
                            </div>
                        </v-card>
                        <v-card style="border-radius: 16px; max-width: 135px; min-width: 135px; aspect-ratio: 1; " to="/profile">
                            <div
                                class="w-100 d-flex flex-column justify-end align-start pl-6 pb-3 font-weight-bold"
                                style="aspect-ratio: 1; background-color: #F1F1F1; background-size: cover;  background-position: 50%; background-image: url('https://i.namu.wiki/i/RmPNdn0sjKx-SYRoeRffcS5pc1rZXK-uA6PQqqU_kLFrqdMVdD3vM9HeF4c_1DLloZ1qu8KZLDwRwO8y-3vNriadzKfcXOeWaQFwwLC2Bn_HxoX1E-clw78tDqSLGLb37UHelCwkxGLeqKIpHvqPtA.webp'); font-size: 10px; text-shadow: -1px 0px white, 0px 1px white, 1px 0px white, 0px -1px white; "
                            >
                                <span>원빈</span>
                                <span>가수, 서울 강남구</span>
                            </div>
                        </v-card>
                    </div>
                </div>
                <div class="d-flex justify-center">
                    <div
                        class="d-flex justify-center flex-column align-center font-weight-bold"
                        style="width: 268px; height: 70px; background: #F1F1F1; box-shadow: 0px 4px 4px 0px #00000040; border-radius: 16px;"
                    >
                        <span>프로필 공개 후 7일</span>
                        <span>경과 시 확인이 불가합니다</span>
                    </div>
                </div>
            </div>
        </div>
    </main-body>
</template>

<style scoped></style>
