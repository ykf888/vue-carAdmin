import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios'
import iconfont from "@/public/font/iconfont.css"
import cookie from 'cookie_js'

const app =createApp(App)
app.config.globalProperties.$axios = axios
app
  
  .use(store)
  .use(router)
  .use(iconfont)
  .use(ElementPlus)
  .use(cookie)
  .mount("#app");
