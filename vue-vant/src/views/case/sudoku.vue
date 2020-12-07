<template>
  <div class="sudoku">
    <ul class="list" id="list">
      <template v-for="(item,index) in list">
        <template v-if="item.prize">
          <li class="prize" 
              :class="{'prize-active':item.prize == active , 'prize-active-two' : item.prize == activeTwo}" :key="index">
            {{item.text}}
          </li>
        </template>
        <template v-else>
          <li class="draw-btn" :key="index" @click="draw">
            {{item.text}}
          </li>
        </template>
      </template>
      
    </ul>
  </div>
</template>
 
<script>
  export default {
    name: 'sudoku',
    props:{},
    components: {},
    data(){
      return{
        active : 0,
        activeTwo : 0,
        list : [
          {
            prize : 1,
            text : 1
          },
          {
            prize : 2,
            text : 2
          },
          {
            prize : 3,
            text : 3
          },
          {
            prize : 4,
            text : 4
          },
          {
            prize : '',
            text : '抽奖'
          },
          {
            prize : 5,
            text : 5
          },
          {
            prize : 6,
            text : 6
          },
          {
            prize : 7,
            text : 7
          },
          {
            prize : 8,
            text : 8
          }
        ]
      }
    },
    mounted(){
      this.$nextTick(()=>{
        this.initPrizePosition();
      })
    },
    computed:{},
    methods:{
      //分析多抽功能
      //1.在最后一圈高亮各个
      //2.暂停后继续执行
      //抽奖
      draw(){
        this.active = 0;
        this.activeTwo = 0;
        // 模拟中奖序号
        let prize = Math.ceil(Math.random() * 8);
        let that = this;
        let {active,activeTwo} = this;
        prize += 32;
        for(let i = 0 ; i < prize; i++){
          setTimeout(()=>{
            active++;
            active = active % 8;
            activeTwo = active - 1;
            if(activeTwo < 1){
              activeTwo += 8;
            }
            if(i == prize - 1){
              activeTwo = 0;
            }
            that.active = active;
            that.activeTwo = activeTwo;
          },2 * i * i);
        }
      },
      //初始化位置
      initPrizePosition(){
        //所有奖品列表
        let prizeList = document.getElementsByClassName('prize');
        // 容器
        let list = document.getElementById('list');
        let itemsPosition = [];
        //遍历获得元素坐标位置
        for(let i = 0,lang = prizeList.length;i < lang;i++){
          // console.log(prizeList[i].offsetLeft - list.offsetLeft);
          itemsPosition.push({
            left : prizeList[i].offsetLeft - list.offsetLeft,
            top : prizeList[i].offsetTop -list.offsetTop
          })
        }
        // 遍历换位置
        for(let i = 0,lang = prizeList.length;i < lang;i++){
          let obj = prizeList[i];
          switch(i){
            case 3:
              //4和5换
              obj.style.left = itemsPosition[4].left -itemsPosition[i].left + 'px';
              obj.style.top = itemsPosition[4].top - itemsPosition[i].top + 'px';
              break;
            case 4:
              // 5和8换
              obj.style.left = itemsPosition[7].left -itemsPosition[i].left + 'px';
              obj.style.top = itemsPosition[7].top - itemsPosition[i].top + 'px';
              break;
            case 5:
              // 6和7换
              obj.style.left = itemsPosition[6].left -itemsPosition[i].left + 'px';
              obj.style.top = itemsPosition[6].top - itemsPosition[i].top + 'px';
              break;
            case 6:
              // 7和6换
              obj.style.left = itemsPosition[5].left -itemsPosition[i].left + 'px';
              obj.style.top = itemsPosition[5].top - itemsPosition[i].top + 'px';
              break;
            case 7:
              // 8和4换
              obj.style.left = itemsPosition[3].left -itemsPosition[i].left + 'px';
              obj.style.top = itemsPosition[3].top - itemsPosition[i].top + 'px';
              break;
          }
        }
      }
    }
  }
</script>
 
<style lang="less" scoped>
.sudoku{
  width: 350px;
  height: 350px;
  border-radius: 20px;
  border:4px solid yellowgreen;
  margin: 30px auto;
}
.list{
  width: 350px;
  height: 350px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  li{
    width: 100px;
    height: 100px;
    text-align: center;
    line-height: 100px;
    background-color: antiquewhite;
    font-size: 20px;
    position: relative;
  }
  .draw-btn{
    background-color: yellowgreen;
  }
  .prize-active{
    background-color: burlywood;
  }
  .prize-active-two{
    background-color: #e6ceb0;
  }
}

</style>
 