<template>
  <div class="touch-header">
    <div class="flex-row">
      <div class="item" v-for="(item,index) in rowOne" :key="'one'+index">
        <div class="level-img level-one-img">
          <img :src="item.img" alt="">
        </div>
        <span class="name">{{item.title}}</span>
      </div>
    </div>
    <div class="flex-row">
      <div class="item" v-for="(item,index) in rowTwo" :key="'two'+index">
        <div class="level-img level-two-img">
          <img :src="item.img" alt="">
        </div>
        <span class="name">{{item.title}}</span>
      </div>
    </div>
    <div class="flex-row">
      <div class="item" v-for="(item,index) in rowThree" :key="'three'+index">
        <div class="level-img level-three-img">
          <img :src="item.img" alt="">
        </div>
        <span class="name">{{item.title}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import rowOne1 from '../assets/img/hotel.png';
  import rowOne2 from '../assets/img/jipiao.png';
  import rowOne3 from '../assets/img/train.png';
  import rowOne4 from '../assets/img/package.png';
  import rowOne5 from '../assets/img/piao.png';

  import rowTwo1 from '../assets/img/haiwaijiudian.png';
  import rowTwo2 from '../assets/img/flight.png';
  import rowTwo3 from '../assets/img/chuanpiao.png';
  import rowTwo4 from '../assets/img/ziyouxing.png';
  import rowTwo5 from '../assets/img/gonglue.png';

  import rowThree1 from '../assets/img/minsu.png';
  import rowThree2 from '../assets/img/zijia.png';
  import rowThree3 from '../assets/img/xinyongka.png';
  import rowThree4 from '../assets/img/tuangou.png';
  import rowThree5 from '../assets/img/yiriyou.png';
  
  export default {
    name: 'index-touch-header',
    data() {
      return {
        rowOne : [
          {
            title : '酒店',
            img : rowOne1
          },
          {
            title : '机票',
            img : rowOne2
          },
          {
            title : '火车票',
            img : rowOne3
          },
          {
            title : '度假',
            img : rowOne4
          },
          {
            title : '景点门票',
            img : rowOne5
          },
        ],
        rowTwo : [
          {
            title : '海外酒店',
            img : rowTwo1
          },
          {
            title : '低价机票',
            img : rowTwo2
          },
          {
            title : '汽车票船票',
            img : rowTwo3
          },
          {
            title : '自由行',
            img : rowTwo4
          },
          {
            title : '攻略',
            img : rowTwo5
          },
        ],
        rowThree : [
          {
            title : '民宿客栈',
            img : rowThree1
          },
          {
            title : '专车自驾',
            img : rowThree2
          },
          {
            title : '赚钱-信用卡',
            img : rowThree3
          },
          {
            title : '旅游团购',
            img : rowThree4
          },
          {
            title : '一日游',
            img : rowThree5
          },
        ],
      }
    }
  }
</script>

<style lang="scss" scoped>
  $baseMultiple:2;
  .touch-header{
    padding: 0 15px;
  }
  .flex-row{
    display: flex;
  }
  .item{
    width: 20%;
    text-align: center;
    padding: 14px 0;
  }
  .level-img{
    margin: 0 auto 14px;
    display: block;
    font-size: 0;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .level-one-img{
    width: 50px * $baseMultiple;
    height: 50px * $baseMultiple;
  }
  .level-two-img,.level-three-img{
    width: 29px * $baseMultiple;
    height: 29px * $baseMultiple;
  }
</style>