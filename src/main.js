import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css' // 부트스트랩
import 'bootstrap-icons/font/bootstrap-icons.css'; // 부트스트랩 아이콘

// axios 설정
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8088' // axios 기본 url 설정 [실제 백엔드 API 주소]
// Axios Interceptor 추가
axios.interceptors.request.use((config) => {
    // 로컬 스토리지에서 jwt를 가져와 헤더에 추가
    const jwtToken = localStorage.getItem('jwt')
    if(jwtToken) {
        config.headers.Authorization = `${jwtToken}`
    }
    return config;
})

axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response && error.response.status === 401) {
        console.log('401 에러 처리')
        // 401 에러가 발생하면 로그아웃 처리를 수행합니다.
        store.commit('logout'); // 예시로 dispatch를 통해 로그아웃 액션을 호출하는 것으로 가정합니다.
        // 또는 router를 사용하여 로그인 페이지로 리다이렉트할 수도 있습니다.
        // router.push('/login');
      }

      if (error.response && error.response.status === 403) {
        alert('로그인이 필요합니다')
        router.push('/login')
      }
      return Promise.reject(error);
    }
  );

const userToken = localStorage.getItem('jwt')
if (userToken) {
    store.commit('login', userToken) // 로컬 스토리지에 jwt 있으면 store에 계정 정보 저장
 }

createApp(App).use(store).use(router).mount('#app')
