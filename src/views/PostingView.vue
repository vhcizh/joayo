<template>
<div class="container bg-body-tertiary text-start px-5 py-5">
    <h3 class="mb-3">{{ posting.title }}</h3>
    <div class="d-flex justify-content-between">
        <span class="text-start">작성자 : {{ posting.nickname }}</span>
        <div>
            <span class="mx-3 text-end">작성일 : {{ posting.postingDate }}</span>
            <span class="text-end">조회수 : {{ posting.viewCount }}</span>
        </div>
    </div>
    <hr>
    <div class="py-3" style="white-space: pre-line;">{{ posting.contents }}</div>
    <span><i class="bi bi-chat-left-text"></i> : {{ posting.commentCount }}</span>
            <span><i class="bi bi-suit-heart"></i> : {{ posting.likeCount }}</span>
    <div></div>
    <div></div>
    
    <LinkedButton msg="목록으로" linked="/"/>
    <LinkedButton v-if="isMyPost" msg="수정하기" :linked="`/postings/${posting.postingId}/modify`"/>
    <button v-if="isMyPost" class="btn btn-primary ms-2" type="button" @click="deleteThis()">삭제하기</button>
</div>
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
    computed: {
        isMyPost() {
            return this.$store.state.account.email === this.posting.email
        }
    },
    mounted() {
        const postingId = this.$route.params.postingId;

        axios.post(`/api/board/postings/${postingId}`)
        .then(()=> { 
            return axios.get(`/api/board/postings/${postingId}`)
        })
        .then(({data}) => {
            this.posting = data.data
        })
        .catch(error => {
                console.error(error);
        });
    },
    methods: {
        deleteThis() {
            axios.delete(`/api/board/postings/${this.posting.postingId}`)
                .then(()=>{
                    alert('삭제되었습니다.')
                    this.$router.push('/');
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }
}
</script>
