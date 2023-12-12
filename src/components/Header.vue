<template>
  <div class="container">
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">

      <!-- 헤더 로고 -->
      <div class="col-md-3 mb-2 mb-md-0">
        <router-link to="/">
          <a href="#" class="d-inline-flex link-body-emphasis text-decoration-none">
            <img id="logo" alt="logo" src="../assets/logo.png">
          </a>
        </router-link>
      </div>
      <!-- 헤더 로고 -->
      
      <!-- 헤더 로그인/회원가입 -->
      <div class="col-md-3 text-end">
        <LinkedButton msg="Login" linked="/login"/>
        <LinkedButton msg="Join" linked="/join"/>
      </div>
      <!-- 헤더 로그인/회원가입 -->


      <!-- 마이페이지 토글 -->
      <div class="dropdown">
        <button @click="toggle" type="button" class="btn btn-primary">
          <i class="bi bi-person-fill"></i>
        </button>
        <div v-if="open" class="align-items-center" >
          <ul class="dropdown-menu d-grid gap-1 p-2 rounded-3 mx-0 shadow w-220px" data-bs-theme="light">
            <li><a class="dropdown-item rounded-2" href="#">프로필</a></li>
            <li><a class="dropdown-item rounded-2" href="#">작성 글</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item rounded-2" href="#">로그아웃</a></li>
          </ul>
        </div>
      </div>
      <!-- 마이페이지 토글 -->
    </header>
  </div>
</template>

<script>
import LinkedButton from '@/components/LinkedButton.vue'

export default {
  name: "header-vue",
  components : {
    LinkedButton
  },
  data() {
    return {
      open: false
    }
  },
  methods: {
    toggle() {
      this.open = !this.open
    }
  }
}
</script>

<style scoped>
#logo {
  width:30%;
}



</style>