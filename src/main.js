import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import "./assets/styles/tail.css";
import slifer from "./modules/slifer/index.js";

import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";

createApp(App).use(router).use(slifer).use(ElementPlus).mount("#app");
