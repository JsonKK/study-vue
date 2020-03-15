<template>
    <div>
        <p>战略优势</p>
        <span v-if="params.id">参数的id是{{params.id}}</span>
    </div>
</template>
<script>
    export default {
        props: {},
        components: {},
        data(){
            return {
                params : {}
            }
        },
        mounted(){
            let {params} = this.$route;
            this.params = Object.assign({},params);
        },
        methods : {
        },
        watch : {
        }
    }
</script>
<style lang="less" scoped>
</style>