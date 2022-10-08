import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import "./assets/main.css";
import 'jquery';
import 'popper.js';
import 'bootstrap';
import './assets/app.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMinus , faPlus, faTrashAlt} from '@fortawesome/free-solid-svg-icons'

library.add(faMinus,faPlus,faTrashAlt)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
