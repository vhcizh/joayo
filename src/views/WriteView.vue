<template>
    <div class="container bg-body-tertiary">
        <h1>글쓰기</h1>
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
import store from '@/store'

export default {
    data() {
        return {
            postData: {
                writerId: store.state.account.id,
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