import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css' // 부트스트랩
import 'bootstrap-icons/font/bootstrap-icons.css'; // 부트스트랩 아이콘

// axios 설정
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8088' // axios 기본 url 설정 [실제 백엔드 API 주소]

createApp(App).use(store).use(router).mount('#app')
