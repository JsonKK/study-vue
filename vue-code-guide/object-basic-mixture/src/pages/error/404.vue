<template>
    <div id="">
        <p>没有找到页面</p>
        <button @click="linkHome">返回首页</button>
    </div>
</template>
 
<script>
    export default {
        name: '',
        props:{},
        components: {},
        data(){return{}},
        mounted(){},
        computed:{},
        methods:{
            linkHome(){
                this.$router.push('/start/index');
            }
        },
        watch:{},
        filters:{}
    }
</script>
 
<style></style>
 