<template>
  <div class="container">
    <table class="table table-hover align-middle">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">제목</th>
          <th scope="col"></th>
          <th scope="col"></th>
          <th scope="col">조회수</th>
          <th scope="col">작성자</th>
          <th scope="col">작성일</th>
        </tr>
      </thead>
      <tbody class="table-group-divider">
        <tr v-for="post in posts" :key="post.number">
          <th scope="row">{{ post.number }}</th>
          <td>{{ post.title }}</td>
          <td><i class="bi bi-suit-heart"></i> {{ post.voteCount }}</td>
          <td><i class="bi bi-chat-left-text"></i> {{ post.commentCount }}</td>
          <td>{{ post.viewCount }}</td>
          <td>{{ post.writer }}</td>
          <td>{{ post.postingDate }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: 'board-list',

  data() {
    return {
      posts: []
    }
  },
  mounted() {
    axios.get("/api/posts").then( res => {
        this.posts = res.data
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
