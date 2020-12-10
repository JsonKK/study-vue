<template>
  <div class="page-content" style="">
    <!-- 渲染lottie -->
    <ul>
      <lottie-item v-for="(item,index) in list" :key="index" :show="item.show"></lottie-item>
    </ul>
    <!-- 按钮 -->
    <div class="btn-normal" @click="initList">切换数据</div>
  </div>
</template>
 
<script>
  import lottieItem from '_c/lottie-item.vue';
  export default {
    name: 'lottie',
    props:{},
    components: {
      lottieItem
    },
    data(){
      return{
        list : [],
        lang : 4
      }
    },
    mounted(){
      this.initList();
    },
    computed:{},
    methods:{
      // 初始化列表
      initList(){
        let {lang} = this;
        let arr = []
        for(let i = 0;i<lang;i++){
          arr[i] = {};
          let random = parseInt(Math.random() * 20);
          if(random > 5){
            arr[i].show = true;
          }
          else{
            arr[i].show = false;
          }
        }
        console.log(arr);
        this.list = arr;
      }
    }
  }
</script>
 
<style lang="less" scoped>
  .page-content{
    width: 100%;
    overflow: hidden;
    min-height: 100vh;
    background-color:#ccc; 
    margin: 0px;
    height: 100%; 
    font-family: sans-serif;
    font-size: 10px;
    &:before{
      content: '.';
      display:block;
      height:0;
      visibility:hidden;
    }
  }

  .circle{
    width:100%;height:100%;
    background-color:#333;
    min-height: 56px;
    margin-top: 20px;
    position: relative;
  }
  .btn-normal{
    width: 300px;
    height: 88px;
    line-height: 88px;
    border-radius: 44px;
    background-color: antiquewhite;
    color: #333;
    text-align: center;
    margin: 30px auto;
    font-size: 28px;
  }
</style>
 