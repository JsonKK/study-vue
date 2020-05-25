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
  import normalData from '../utils/normalData';
  
  export default {
    name: 'index-touch-header',
    data() {
      return {
        rowOne : normalData.touchList.rowOne,
        rowTwo : normalData.touchList.rowTwo,
        rowThree : normalData.touchList.rowThree,
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