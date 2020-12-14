<template>
  <div class="draw-card" 
      :class="{'draw-card-turn' : show}"
      :style="{width:width+'px',height:height+'px'}">
    <slot name="front-card" class="front-card"></slot>
    <slot name="back-card" class="back-card"></slot>
  </div>
</template>
 
<script>
  import utils from '@/utils/utils.js'
  export default {
    props:{
      //翻面
      show : {
        type : Boolean
      },
      //宽度
      width : {
        type : Number
      },
      //高度
      height : {
        type : Number
      }
    },
    components: {},
    data(){
      return{

      }
    },
    mounted(){
      utils.getUserInfo().then((data)=>{
        console.log(JSON.stringify(data) + '2');
      })
    },
    computed:{},
    methods:{}
  }
</script>
 
<style lang="less" scoped>
.draw-card{
  // width: 192px;
  // height: 288px;
  position: relative;
}
.front-card,
.back-card{
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all .2s linear;
}
.front-card{
  transform: rotateY(180deg);
}
.back-card{
  transform: perspective(1000px) rotateY(0deg);
}
.draw-card-turn{
  .back-card{
    opacity: 0.9;
    transform: rotateY(180deg);
  }
  .front-card{
    transform: perspective(1000px) rotateY(0deg) ;
  }
}
</style>
 