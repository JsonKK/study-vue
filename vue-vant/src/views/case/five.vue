<template>
  <div id="five" class="five">
    <canvas id="mycanvas"></canvas>
  </div>
</template>
 
<script>
  import { Dialog } from 'vant';
  import Five from '../../utils/five.js';
  let that;
  export default {
    name: 'five',
    props:{},
    components: {},
    data(){
      that = this;
      return{}
    },
    mounted(){
      this.initChess()
    },
    methods:{
      // 根据屏幕尺寸初始化宽高
      initChess(){
        let width = document.documentElement.clientWidth ;
        let height = document.documentElement.clientHeight ;
        
        this.five = new Five({
          id:'mycanvas',
          lineNumber:parseInt(width/40),
          lineNumberY:parseInt(height/40),
          chessWidth:40,
          end({color,colorNum}){
            Dialog({ 
              message: `${color}子获胜\r快开始新的一局吧`,
              beforeClose(action,done){
                that.five.init();
                done();
              } 
            });
          }
        });
      }
    }
  }
</script>
 
<style lang="less" scoped>
.five{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}
canvas {
  background-color: #fff;
  display: block;
  margin: 0 auto;
  box-shadow: -2px -2px 2px #F3F2F2, 
              5px 5px 5px #6F6767;
}
</style>
 