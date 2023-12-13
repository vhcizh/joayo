<template>
  <div class="container">
    <img alt="Vue logo" src="@/assets/logo.png">
    <div class="d-md-flex justify-content-md-end mb-3">
      <LinkedButton msg="글쓰기" linked="/write"/>
    </div>
    <Board/>
  </div>
</template>

<script>
// @ is an alias to /src
import Board from '@/components/Board.vue'
import LinkedButton from '@/components/LinkedButton.vue'

export default {
  name: 'BoardView',
  components: {
    Board,
    LinkedButton
  }
}
</script>
