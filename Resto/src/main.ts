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
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import {faFacebook}from '@fortawesome/free-brands-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import {faTwitter}from '@fortawesome/free-brands-svg-icons';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';

import { faMinus, faPlus, faTrashAlt,faPeopleCarryBox, faHouseChimney,faUserPen,faUtensils} from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck, faCircleUser} from '@fortawesome/free-regular-svg-icons'

library.add(faMinus,faPlus,faTrashAlt,faCircleCheck,faPeopleCarryBox,faDollarSign,faCircleUser,faHouseChimney,faHouse,faUserPen, faUtensils,faTwitter,faInstagram,faFacebook)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
