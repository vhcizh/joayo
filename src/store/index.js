import { createStore } from 'vuex'

export default createStore({
  state: {
    account:{
      id:0
    }
  },
  getters: {
  },
  mutations: {
    setAccount(state, payload) {
      state.account.id = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
