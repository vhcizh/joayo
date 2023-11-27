<template>
  <div class="container">
    <div class="d-flex align-items-center py-4 bg-body-tertiary">
      <main class="form-signin w-100 m-auto">
        <form>
          <img class="mb-4" src="../assets/logo.png" alt="Vue logo" width="72" height="57">
          <h1 class="h3 mb-3 fw-normal">회원가입</h1>

          <div class="form-floating">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
            <label for="floatingPassword">Password</label>
          </div>
          <div class="m-auto">

          </div>
          <button class="btn btn-primary w-100 py-2" type="submit">가입하기</button>
        </form>
      </main> 
    </div>
  </div>
</template>

<style scoped>
.form-signin {
    max-width: 330px;
    padding: 1rem;
}
</style>