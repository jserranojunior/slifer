import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import "./assets/styles/tail.css";
import slifer from "./modules/slifer/index.js";

createApp(App).use(router).use(slifer).mount("#app");
