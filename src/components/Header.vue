<template>
  <div class="container">
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">

      <!-- 헤더 로고 -->

        <Logo/>
      <!-- 헤더 로고 -->
      
      <!-- 헤더 로그인/회원가입 -->
      <!-- <div v-if="!$store.state.account.nickname" class="text-end"> -->
      <div v-if="!nickname" class="text-end">
        <LinkedButton msg="Login" linked="/login"/>
        <LinkedButton msg="Join" linked="/join"/>
      </div>
      <!-- 헤더 로그인/회원가입 -->

      <!-- 마이페이지 토글 -->
      <div v-else class="dropdown">
        <button @click="toggle" type="button" class="btn btn-primary">
          <i class="bi bi-person-fill"></i>
        </button>
        <div v-if="open" class="align-items-center" >
          <ul class="dropdown-menu d-grid gap-1 p-2 rounded-3 mx-0 shadow w-220px" data-bs-theme="light">
            <li><a class="dropdown-item rounded-2" href="#">{{ nickname }} 님</a></li>
            <li><a class="dropdown-item rounded-2" href="#">작성 글</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item rounded-2" href="#" @click="logout()">로그아웃</a></li>
          </ul>
        </div>
      </div>
      <!-- 마이페이지 토글 -->
    </header>
  </div>
</template>

<script>
import LinkedButton from '@/components/LinkedButton.vue'
import Logo from '@/components/Logo.vue'
import store from '@/store'

export default {
  name: "header-vue",
  components : {
    LinkedButton,
    Logo
  },
  data() {
    return {
      open: false,
      // nickname : store.state.account.nickname
    }
  },
  computed: {
    nickname() {
      return this.$store.state.account.nickname;
    },
  },
  methods: {
    toggle() {
      this.open = !this.open
    },
    logout(){
      store.commit('logout')
      this.$router.push("/");
    },
  }
}
</script>

<style>

</style>