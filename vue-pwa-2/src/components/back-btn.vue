<template>
  <div>
    <div class="back-btn" @click="back"></div>
  </div>
</template>
 
<script>
  export default {
    name: '',
    props:{
      //是否返回app
      backApp : {
        type : Boolean,
        default : false
      }
    },
    data(){return{}},
    mounted(){},
    methods:{
      //返回按钮处理
      back(){
        let {backApp} = this;
        if(backApp){
          // eslint-disable-next-line no-undef
          HBUtils && HBUtils.callHandler('dismissViewAnimated', '');
        }
        else{
          this.$router.back();
        }
      }
    },
  }
</script>
 
<style lang="scss" scoped>
.back-btn{
  width: 56px;
  height: 56px;
  position: absolute;
  top: 46px + 34px;
  left: 40px;
  background: url(../assets/img/back.png) no-repeat;
}
</style>
 