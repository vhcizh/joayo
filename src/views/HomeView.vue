<template>
  <div class="container">
    <img alt="Vue logo" src="../assets/logo.png">
    <Board/>
  </div>
</template>

<script>
// @ is an alias to /src
import Board from '@/components/Board.vue'

export default {
  name: 'HomeView',
  components: {
    Board
  }
}
</script>
