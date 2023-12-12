<template>
    <router-link :to="linked">
        <button class="btn btn-primary ms-2" type="button">{{msg}}</button>
    </router-link>
</template>

<script>
export default {
    name: 'linked-botton',
    props: {
        msg: String,
        linked: String
    }
}

</script>