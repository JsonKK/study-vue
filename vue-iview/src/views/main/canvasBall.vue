<template>
  <div id="canvas-ball">
    <canvas class="ball-box" ></canvas>
  </div>
</template>
 
<script>
  import {ball} from '../../utiles/ballAnimate.js';
  export default {
    name: 'canvasBall',
    components: {},
    data(){
      return{}
    },
    mounted(){
      this.initBall();
      let renderBall = new ball();
      
    },
    methods:{
      initBall(){
        let canvas = document.getElementsByClassName('ball-box')[0];
        let canvasBox = document.getElementById('canvas-ball');
        canvas.width = canvasBox.clientWidth;
        canvas.height = 600;
        let content = canvas.getContext('2d');
        //绘制动画
        let x = 50,y=50;
        let animate = setInterval(()=>{
          content.clearRect(0,0,canvas.width,canvas.height);
          content.beginPath();
          content.fillStyle = "yellowgreen";
          content.arc(x++,y+=0.3,100,0,Math.PI*2);
          content.fill();
          if(x>canvas.width+100 || y>canvas.height+100){
            x = 50 ; y = 50;
            // clearInterval(animate);
          }
        },1000/60);
        
      }
    }
  }
</script>
 
<style lang="less" scoped>
  .ball-box{
    // width: 100%;
    // height: 600px;
  }
</style>
 