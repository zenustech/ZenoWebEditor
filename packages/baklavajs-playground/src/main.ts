import { createApp } from "vue";
import Vue from 'vue';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import router from "../router"

//import App from "./App.vue";
import App from "./App2.vue";

import { BaklavaVuePlugin } from "../../baklavajs-plugin-renderer-vue/src";
import "../../baklavajs-plugin-renderer-vue/src/styles/all.scss";
import "./test.css";

const app = createApp(App, {});
app.use(ElementPlus);
app.use(BaklavaVuePlugin);
// app.use(router)
app.mount("#app");
