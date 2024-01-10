<template>
  <div class="container">
    <div class="d-flex align-items-center py-4 bg-body-tertiary">
      <main class="form-signin w-100 m-auto">
        <form @submit.prevent="login">
          <Logo/>
          <h1 class="h3 mb-3 fw-normal">로그인</h1>

          <div class="form-floating">
              <input type="email" 
                    class="form-control" 
                       id="login-email" 
              placeholder="email"
                  v-model=formData.username
                  @focus="clearError"
                  required>
              <label for="login-email">email</label>
          </div>

          <div class="form-floating">
              <input type="password" 
                    class="form-control" 
                       id="login-password" 
              placeholder="password"
                  v-model=formData.password
                  @focus="clearError"
                  required>
              <label for="login-password">password</label>
          </div>

          <div class="m-auto" id="error">
            <p v-if="errorMessage" class="text-danger"> {{ errorMessage }} </p>
          </div>

          <button class="btn btn-primary w-100 py-2 mt-4" type="submit">로그인</button>
        </form>
      </main> 
    </div>
  </div>
</template>

<script>
import Logo from '@/components/Logo.vue'
import store from '@/store';
import axios from 'axios'

export default {
  components: {
    Logo,
  },
  data() {
    return {
      formData: {
        username:'',
        password:''
      },
      errorMessage:''
    }
  },
  methods: {
    login() {
        axios.post('/api/login', this.formData, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
              .then((res)=>{
                  const jwt = res.headers.authorization
                  store.commit('login', jwt)
                  this.$router.push(`/`);
              })
              .catch(e => {
                  console.log(e)
                  this.errorMessage = e.response.data.message;
              });
    },
    clearError() {
      this.errorMessage='';
    },
  }
}
</script>

<style scoped>
.form-signin {
    max-width: 330px;
    padding: 1rem;
}
</style>