import { createStore } from 'vuex'
import {jwtDecode} from 'jwt-decode'

export default createStore({
  state: {
    account:{
      nickname:'',
      email:''
    }
  },
  getters: {
  },
  mutations: {
    login(state, payload) {
      const claims = jwtDecode(payload)
      state.account.nickname = claims.nickname
      state.account.email = claims.email
      localStorage.setItem('jwt', payload)
    },
    logout(state) {
      state.account.nickname = ''
      state.account.email = ''
      localStorage.removeItem('jwt')
    }
  },
  actions: {
  },
  modules: {
  }
})
