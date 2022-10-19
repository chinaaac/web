import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "@/assets/css/reset.css";

console.log(import.meta.env.VITE_API);

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
