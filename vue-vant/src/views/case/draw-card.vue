<template>
  <div class="content">
    <m-draw-card :show="turn" :width="100" :height="150">
      <div slot="front-card" class="front-card"></div>
      <div slot="back-card" class="back-card"></div>
    </m-draw-card>
    <m-draw-card :show="turn">
      <div slot="front-card" class="front-card"></div>
      <div slot="back-card" class="back-card"></div>
    </m-draw-card>
    <button class="btn-test" @click="turn = !turn">牌面</button>
  </div>
  
</template>
 
<script>
  import mDrawCard from '_c/draw-card.vue';
  import utils from '@/utils/utils.js'
  export default {
    name: 'drawCard',
    props:{},
    components: {
      mDrawCard
    },
    data(){
      return{
        turn : false
      }
    },
    mounted(){
      utils.getUserInfo().then((data)=>{
        console.log(JSON.stringify(data) + '1');
      })
    },
    computed:{},
    methods:{
      showCard(){
        this.turn = true;
      }
    }
  }
</script>
 
<style lang="less" scoped>
.content{
  min-height: 100vh;
  background-color: burlywood;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
}
.btn-test{
  width: 120px;
  height: 80px;
  text-align: center;
  line-height: 80px;
  font-size: 22px;
}
.front-card{
  background: url(../../assets/images/draw-card/144_card_green@2x.png) no-repeat;
  background-size: cover;
}
.back-card{
  background: url(../../assets/images/draw-card/144_card@2x.png) no-repeat;
  background-size: cover;
}
// .card-wrap{
//   width: 192px;
//   height: 288px;
//   margin: 30px auto;
//   position: relative;
//   >div{
//     width: 100%;
//     height: 100%;
//     position: absolute;
//     left: 0;
//     top: 0;
//   }
//   &:hover{
//     .back-card{
//       opacity: 0.9;
//       transform: rotateY(-180deg);
//     }
//     .front-card{
//       transform: perspective(800px) rotateY(0deg) ;
//     }
//   }
// }
// .front-card{
//   background: url(../../assets/images/draw-card/144_card_green@2x.png) no-repeat;
//   transform: rotateY(180deg);
//   backface-visibility: hidden;
//   transition: all 500ms ease;

// }
// .back-card{
//   background: url(../../assets/images/draw-card/144_card@2x.png) no-repeat;
//   transform: perspective(800px) rotateY(0deg);
//   backface-visibility: hidden;
//   transition: all 500ms ease;
// }
</style>
 