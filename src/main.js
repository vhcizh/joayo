import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css' // 부트스트랩
import 'bootstrap-icons/font/bootstrap-icons.css'; // 부트스트랩 아이콘

createApp(App).use(store).use(router).mount('#app')
