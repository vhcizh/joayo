<template>
    <div class="container bg-body-tertiary">
        <h1>글수정</h1>
        <div>작성자 : {{ posting.writer }}</div>
        <div class="mb-3">
            <input v-model="posting.title" 
                    type="text" 
                    class="form-control" 
                    placeholder="글 제목을 입력하세요"
                    >
        </div>
        <textarea class="form-control" 
                v-model="posting.contents" 
                rows="10"
                placeholder="글 내용을 입력하세요">
        </textarea>
        <LinkedButton msg="돌아가기" :linked="`/postings/${posting.postingId}`"/>
        <LinkedButton msg="수정완료" :linked="`/postings/${posting.postingId}`" @click="submit"/>
    </div>
</template>

<script>
import axios from 'axios';
import LinkedButton from '@/components/LinkedButton.vue';

export default {
    data() {
        return {
            posting:{}
        };
    },
    components:{
        LinkedButton
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
    methods: {
        submit() {
            const postingId = this.$route.params.postingId;
            axios.patch(`/api/board/postings/${postingId}`, this.posting)
                .then(({data}) => {
                    console.log(data)
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }
}

</script>