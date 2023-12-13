<template>
    <div class="container bg-body-tertiary">
        <h1>글쓰기</h1>
        <input type="number" 
                v-model="postData.writerId"
                class="form-control mb-2"
                placeholder="로그인 구현 전 임시 writerId - 1 넣을것">
        <div class="mb-3">
            <input v-model="postData.title" 
                    type="text" 
                    class="form-control" 
                    placeholder="글 제목을 입력하세요">
        </div>
        <textarea class="form-control" 
                v-model="postData.contents" 
                rows="10"
                placeholder="글 내용을 입력하세요">
        </textarea>
        <div class="py-3 text-end">
            <button class="btn btn-primary ms-2" type="button" @click="submit()">등록</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            postData: {
                writerId: '',
                title: '',
                contents:''
            },
            postingId:null
        };
    },
    methods: {
        submit() {
            axios.post('/api/board/postings', this.postData)
                .then(({data})=>{
                    this.postingId=data.id
                    this.$router.push(`/postings/${this.postingId}`);
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }
}

</script>