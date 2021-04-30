<template>
  <div class="content">
    <div class="img-box">
      <img src="@/assets/images/img-distance/pop-rule_01.jpg" alt="">
      <img src="@/assets/images/img-distance/pop-rule_02.jpg" alt="">
      <img src="@/assets/images/img-distance/pop-rule_03.jpg" alt="">
    </div>
  </div>
</template>
 
<script>
  export default {
    name: 'img-distance',
    components: {},
    data(){
      return{

      }
    },
    mounted(){},
    computed:{},
    methods:{}
  }
</script>
 
<style lang="less" scoped>
.content{
  width: 100%;
  height: 100vh;
  background-color: #59e600;
  overflow-y: auto;
}
.img-box{
  font-size: 0;
  img{
    display: block;
    margin: 0 auto;
    max-width: 100%;
    min-width: .1vh;
    height: auto;
    transition: all ease .3s;
    padding-bottom: 0;
  }
}
</style>
 