<template>
    <div>
        <div> 작성자 : {{ posting.writer }}</div>
        <div> 작성일 : {{ posting.postingDate }}</div>
        <div> 조회수 : {{ posting.viewCount }}</div>
    </div>
    <div>
        <h1> {{ posting.title }} </h1>
        <div>{{ posting.contents }}</div>
    </div>
    <div>
        좋아요 수 : {{ posting.likeCount }}
    </div>
    <div>
        댓글 수 : {{ posting.commentCount }}
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "posting-view",

    data() {
        return {
            posting:{}
        }
    },
    mounted() {
        const postingId = this.$route.params.postingId;

        axios.get(`/api/board/postings/${postingId}`).then( ({data}) => {
            console.log(data)
            this.posting = data.data
        })
    },
}
</script>
