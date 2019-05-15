<template>
    <div id="btn-box">
        <button @click="backPage">返回上一页</button>
    </div>
</template>
 
<script>
    export default {
        name: '',
        props:{},
        components: {},
        data(){
            return {};
        },
        mounted(){},
        computed:{},
        methods:{
            backPage(){
                let route = this.$route;
                if(route && route.matched.length>0){
                    this.$router.go(-1);
                }
            }
        },
        watch:{},
        filters:{}
    }
</script>
 
<style></style>
 