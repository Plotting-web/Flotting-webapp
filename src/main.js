import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { createPinia } from "pinia";
import piniaPluginPersistedState from "pinia-plugin-persistedstate";
import Toggle from "@vueform/toggle";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia.use(piniaPluginPersistedState));
app.use(router);
app.use(vuetify);
app.component("ToggleButton", Toggle);
app.mount("#app");
