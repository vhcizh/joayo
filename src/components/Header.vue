<template>
  <div class="container">
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <div class="col-md-3 mb-2 mb-md-0">
        <router-link to="/">
          <a href="#" class="d-inline-flex link-body-emphasis text-decoration-none">
            <img id="logo" alt="logo" src="../assets/logo.png">
          </a>
        </router-link>
      </div>

      <!-- <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a href="#" class="nav-link px-2 link-secondary">Home</a></li>
      </ul> -->

      

      <div class="col-md-3 text-end">
        <router-link to="/login"><button type="button" class="btn btn-outline-primary me-2">Login</button></router-link>
        <router-link to ="/join"><button type="button" class="btn btn-primary">Sign-up</button></router-link>
        
      </div>

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
    </header>
  </div>
</template>

<script>
export default {
  name: "header-vue",
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