<template>
  <div class="container">
    <div class="d-flex align-items-center py-4 bg-body-tertiary">
      <main class="form-signin w-100 m-auto">
        <form @submit.prevent="join">
          <Logo/>
          <h1 class="h3 mb-3 fw-normal">회원가입</h1>

          <div class="form-floating">
              <input type="email" 
                    class="form-control" 
                       id="join-email" 
              placeholder="email"
                  v-model=formData.email
                  @focus="clearError"
                  required>
              <label for="join-email">email</label>
          </div>

          <div class="form-floating">
              <input type="text" 
                    class="form-control" 
                       id="join-nickname" 
              placeholder="nickname"
                  v-model=formData.nickname
                  @focus="clearError"
                  required>
              <label for="join-nickname">nickname</label>
          </div>

          <div class="form-floating">
              <input type="password" 
                    class="form-control" 
                       id="join-password" 
              placeholder="password"
                  v-model=formData.password
                  @focus="clearError"
                  required>
              <label for="join-password">password</label>
          </div>

          <div class="m-auto" id="error">
            <p v-if="errorMessage" class="text-danger"> {{ errorMessage }} </p>
          </div>
          <button class="btn btn-primary w-100 py-2 mt-4" type="submit">가입하기</button>
        </form>
      </main> 
    </div>
  </div>
</template>

<script>
import Logo from '@/components/Logo.vue'
import axios from 'axios';

export default {
  components: {
    Logo,
  },
  data() {
    return {
      formData: {
        email:null,
        nickname:'',
        password:''
      },
      errorMessage:''
    }
  },
  methods: {
    join() {
      if (this.validateNickname() && this.validatePassword()) {
        axios.post('/api/members', this.formData)
                  .then(()=>{
                      alert('가입되었습니다.')
                      this.$router.push(`/login`);
                  })
                  .catch(e => {
                    this.errorMessage = e.response.data;
                  });
       }
    },
    clearError() {
      this.errorMessage='';
    },
    validateNickname() {
      const nicknamePattern = /^[a-zA-Z0-9가-힣]{2,}$/;
      if (nicknamePattern.test(this.formData.nickname)) {
        return true;
      } else {
        this.errorMessage = '닉네임은 한글, 영문, 숫자로 이루어져야 하며 2글자 이상이어야 합니다.';
        return false;
      }
    },
    validatePassword() {
      const passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
      if (passwordPattern.test(this.formData.password)) {
        return true;
      } else {
        this.errorMessage = '비밀번호는 영문 소문자 또는 대문자와 숫자를 포함하여 8글자 이상이어야 합니다.';
        return false;
      }
    }
  }

}
</script>

<style scoped>
.form-signin {
    max-width: 330px;
    padding: 1rem;
}
</style>