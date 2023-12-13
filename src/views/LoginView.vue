<template>
  <div class="container">
    <div class="d-flex align-items-center py-4 bg-body-tertiary">
      <main class="form-signin w-100 m-auto">
        <form>
          <img class="mb-4" src="../assets/logo.png" alt="Vue logo" width="72" height="auto">
          <h1 class="h3 mb-3 fw-normal">Welcome</h1>

          <div class="form-floating">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
            <label for="floatingPassword">Password</label>
          </div>
          <button class="btn btn-primary w-100 py-2" type="submit">로그인</button>
        </form>
      </main> 
    </div>
  </div>
</template>

<script>
// // @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

// export default {
//   name: 'HomeView',
//   components: {
//     HelloWorld
//   }
// }
</script>

<style scoped>
.form-signin {
    max-width: 330px;
    padding: 1rem;
}
</style>