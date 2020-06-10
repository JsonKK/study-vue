<template>
  <div class="detail"></div>
</template>
 
<script>
  import axios from 'axios';
  export default {
    name: 'detail',
    props:{},
    components: {},
    data(){
      return{
        
      }
    },
    mounted(){},
    computed:{},
    methods:{
      //初始化详情数据
      initDetail(){
        let id = this.$router.parms.id;
        console.log(id);
      }
    },
    watch:{}
  }
</script>
 
<style></style>
 