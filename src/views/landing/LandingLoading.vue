<script setup>
import PlotLogo from "@/components/icon/PlotLogo.vue";
import MainBody from "@/components/layout/MainBody.vue";
</script>

<template>
    <main-body background-color="#60E0E0" is-header is-navigation>
        <div class="view-layout">
            <div class="view-title">
                <plot-logo width="120" height="60" />
                <span style="">검증된 직장인을 위한 후불제 소개팅</span>
            </div>
            <div class="card-layout">
                <div class="card">
                    <div class="loader-layout">
                        <span class="loader"></span>
                    </div>
                    <p style="margin-top: 40px; margin-bottom: 20px;">Loading</p>
                    <p>잠시만 기다려 주세요.</p>
                    <p style="margin-top: 20px; margin-bottom: 60px; font-size: 14px; color:#B6B6B6;">추가 멘트 자리.</p>
                </div>
            </div>
        </div>
    </main-body>
</template>

<style scoped>
.view-layout {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.view-title {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 28px;
    margin-bottom: 60px;
}

.view-title > span {
    font-size: 20px;
    letter-spacing: 0;
    color: white;
    text-align: center;
    font-weight: bold;
}

.card-layout {
    padding-inline: 36px;
    width: 100%;
}

.card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 24px;
    align-items: center;
    width: 100%;
    background-color: #ffffff;
    border-radius: 16px;
    box-shadow: 0px 4px 4px #00000040;
    font-size: 18px;
    font-weight: 700;
    color: #60e0e0;
    text-align: center;
    line-height: initial;
}

.card-btn {
    width: 100%;
    height: 60px;
    box-shadow: 0px 4px 4px 0px #00000040;
    border-radius: 16px;
    font-weight: 700;
    font-size: 24px;
    letter-spacing: 0;
    background-color: #60e0e0;
    color: #ffffff;
}

.loader-layout {
    width: 100%;
    height: 100px;
    margin-top: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.loader {
    color: #60e0e0;
    font-size: 15px;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    position: relative;
    text-indent: -9999em;
    animation: mulShdSpin 1.3s infinite linear;
    transform: translateZ(0);
}

@keyframes mulShdSpin {
    0%,
    100% {
        box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;
    }
    12.5% {
        box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
    }
    25% {
        box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
    }
    37.5% {
        box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;
    }
    50% {
        box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;
    }
    62.5% {
        box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;
    }
    75% {
        box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;
    }
    87.5% {
        box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;
    }
}
</style>
