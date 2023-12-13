<template>
    <table class="table table-hover align-middle">
      <thead class="table-light">
        <tr>
          <th scope="col">#</th>
          <th scope="col" class="col-6">제목</th>
          <th scope="col"></th>
          <th scope="col"></th>
          <th scope="col">조회수</th>
          <th scope="col">작성자</th>
          <th scope="col">작성일</th>
        </tr>
      </thead>
      <tbody class="table-group-divider">
        <tr v-for="posting in postings" :key="posting.postingId">
            <th scope="row">{{ posting.postingId }}</th>
            <td class="col-6">
              <router-link :to="`/postings/${posting.postingId}`">
                {{ posting.title }}
              </router-link>
            </td>
            <td><i class="bi bi-suit-heart"></i> {{ posting.likeCount }}</td>
            <td><i class="bi bi-chat-left-text"></i> {{ posting.commentCount }}</td>
            <td>{{ posting.viewCount }}</td>
            <td>{{ posting.writer }}</td>
            <td>{{ posting.postingDate }}</td>
          
        </tr>
      </tbody>
    </table>
</template>

<script>
import axios from "axios"

export default {
  name: 'board-list',

  data() {
    return {
      postings: []
    }
  },
  mounted() {
    axios.get("/api/board/postings").then( ({data}) => {
        this.postings = data.data
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
