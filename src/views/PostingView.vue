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
    <LinkedButton msg="목록으로" linked="/"/>
    <LinkedButton msg="수정하기" :linked="`/postings/${posting.postingId}/modify`"/>
</template>

<script>
import axios from 'axios';
import LinkedButton from '@/components/LinkedButton.vue';

export default {
    name: "posting-view",
    components:{
        LinkedButton
    },
    data() {
        return {
            posting:{}
        }
    },
    mounted() {
        const postingId = this.$route.params.postingId;

        axios.get(`/api/board/postings/${postingId}`)
            .then(({data}) => {
                this.posting = data.data
            })
            .catch(error => {
                    console.error(error);
            });
    },
}
</script>
