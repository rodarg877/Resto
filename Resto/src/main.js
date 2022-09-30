import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";
import 'jquery';
import 'popper.js';
import 'bootstrap';
import './assets/app.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';
import router from './router'

const app = createApp(App)

app.use(router)
createApp(App).mount("#app");

