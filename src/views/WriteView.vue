<template>
    <div class="container bg-body-tertiary">
    <h1>글쓰기</h1>
        <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="글 제목을 입력하세요">
        </div>
        <div id="editor">
            <p>This is some sample content.</p>
        </div>
    </div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default {
    mounted() {
        ClassicEditor
            .create( document.querySelector( '#editor' ) )
            .catch( error => { console.error( error ); });
    },
}

</script>

<style>
.ck-editor__editable[role="textbox"] {
    /* editing area */
    min-height: 300px;
}

.ck-content .image {
    /* block images */
    max-width: 80%;
    margin: 20px auto;
}

</style>