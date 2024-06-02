<script setup>
import MainHeader from "@/components/layout/MainHeader.vue";
import MainBody from "@/components/layout/MainBody.vue";
import ProfileImage from "@/components/image/ProfileImage.vue";
</script>

<template>
    <main-header start="setting" end="store" title />
    <main-body is-header is-navigation>
        <div class="view-layout">
            <p class="view-title">좋아요 현황</p>
            <div class="card-layout">
                <div class="list-layout">
                    <p class="list-title">내가 받은 좋아요</p>
                    <div class="list-divider"></div>
                    <div class="list-content">
                        <v-card variant="text" style="max-width: 135px; min-width: 135px; aspect-ratio: 1; ">
                            <profile-image variant="dormant" radius />
                        </v-card>
                        <v-card variant="text" style="max-width: 135px; min-width: 135px; aspect-ratio: 1; " to="/profile">
                            <profile-image
                                title="원빈"
                                sub-title="가수, 서울 강남구"
                                variant="compact"
                                radius
                                matched
                                src="https://image.fnnews.com/resource/media/image/2023/12/16/202312160703001203_l.jpg"
                            />
                        </v-card>
                        <v-card variant="text" style="max-width: 135px; min-width: 135px; aspect-ratio: 1; " to="/profile">
                            <profile-image
                                title="원빈"
                                sub-title="가수, 서울 강남구"
                                variant="compact"
                                radius
                                src="https://image.fnnews.com/resource/media/image/2023/12/16/202312160703001203_l.jpg"
                            />
                        </v-card>
                        <v-card variant="text" style="max-width: 135px; min-width: 135px; aspect-ratio: 1; " to="/profile">
                            <profile-image
                                title="원빈"
                                sub-title="가수, 서울 강남구"
                                variant="compact"
                                radius
                                src="https://image.fnnews.com/resource/media/image/2023/12/16/202312160703001203_l.jpg"
                            />
                        </v-card>
                    </div>
                </div>
                <div class="list-layout">
                    <p class="list-title">내가 보낸 좋아요</p>
                    <div class="list-divider"></div>
                    <div class="list-content">
                        <v-card variant="text" style="max-width: 135px; min-width: 135px; aspect-ratio: 1; ">
                            <profile-image variant="dormant" radius />
                        </v-card>
                        <v-card variant="text" style="max-width: 135px; min-width: 135px; aspect-ratio: 1; " to="/profile">
                            <profile-image
                                title="원빈"
                                sub-title="가수, 서울 강남구"
                                variant="compact"
                                radius
                                matched
                                src="https://image.fnnews.com/resource/media/image/2023/12/16/202312160703001203_l.jpg"
                            />
                        </v-card>
                        <v-card variant="text" style="max-width: 135px; min-width: 135px; aspect-ratio: 1; " to="/profile">
                            <profile-image
                                title="원빈"
                                sub-title="가수, 서울 강남구"
                                variant="compact"
                                radius
                                src="https://image.fnnews.com/resource/media/image/2023/12/16/202312160703001203_l.jpg"
                            />
                        </v-card>
                        <v-card variant="text" style="max-width: 135px; min-width: 135px; aspect-ratio: 1; margin-right: 2px;" to="/profile">
                            <profile-image
                                title="원빈"
                                sub-title="가수, 서울 강남구"
                                variant="compact"
                                radius
                                src="https://image.fnnews.com/resource/media/image/2023/12/16/202312160703001203_l.jpg"
                            />
                        </v-card>
                    </div>
                </div>
                <div class="list-guide-text">
                    <p>프로필 공개 후 7일</p>
                    <p>경과 시 확인이 불가합니다</p>
                </div>
            </div>
        </div>
    </main-body>
</template>

<style scoped>
.view-layout {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 24px;
    gap: 24px;
}

.view-title {
    width: 260px;
    height: 52px;
    color: white;
    font-weight: bold;
    padding-block: 15px;
    background: rgba(96, 224, 224, 0.7);
    box-shadow: 4px 4px 10px 0 #60e0e0;
    border-radius: 16px;
    font-size: 20px;
    text-align: center;
}

.card-layout {
    width: 100%;
    height: 575px;
    box-shadow: 4px 4px 10px 0px #60e0e0;
    border-radius: 16px;
    gap: 36px;
    display: flex;
    flex-direction: column;
    padding: 36px 24px;
}

.list-layout {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.list-title {
    width: fit-content;
    border-radius: 16px;
    box-shadow: 0px 4px 4px 0px #00000040;
    background: #60e0e0;
    color: #ffffff;
    font-size: 14px;
    text-align: center;
    font-weight: 700;
    padding: 4px 8px;
}

.list-divider {
    width: 100%;
    height: 3px;
    background: #f1f1f1;
    border-radius: 16px;
}

.list-content {
    display: flex;
    width: auto;
    overflow-x: auto;
    gap: 5px;
    padding-right: 4px;
    padding-bottom: 8px;
}

.list-guide-text {
    width: 100%;
    padding: 16px;
    text-align: center;
    background: #f1f1f1;
    box-shadow: 0px 4px 4px 0px #00000040;
    border-radius: 16px;
    font-weight: 700;
    font-size: 16px;
}
</style>
