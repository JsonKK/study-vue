<template>
  <div class="banner">
    <swiper :options="swiperOptions" ref="mySwiper">
      <!-- slides -->
      <swiper-slide class="img-box" v-for="(item,index) in bannerArr" :key="'banner'+index">
        <img :src="item" alt="">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination">

      </div>
      <!-- <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div> -->
      <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
    </swiper>
    <div class="travel-icon">
      <p class="icon iconfont">&#xe71b;</p>
      <p>广告</p>
    </div>
  </div>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper';
  import banner1 from '../assets/img/banner1.jpg';
  import banner2 from '../assets/img/banner2.jpg';
  import banner3 from '../assets/img/banner3.jpg';
  export default {
    name: 'index-swiper',
    components : {
      swiper,
      swiperSlide
    },
    data() {
      return {
        swiperOptions: {
          pagination: '.swiper-pagination',
          paginationBulletRender: function (swiper, index, className) {
              return '<span class="item-doc ' + className + '"></span>';
          },
          // 开启循环播放
          loop : true,
          autoplay : 2000,
        },
        bannerArr : [banner1,banner2,banner3]
      }
    }
  }
</script>

<style lang="scss" scoped>
  $baseMultiple:2;
  .banner{
    width: 710px;
    height: 236px;
    margin: 35px auto;
    overflow: hidden;
    border-radius: 10px;
    position: relative;
  }
  .img-box{
    width: 710px;
    height: 236px;
    display: block;
    img{
      width: 100%;
      height: 100%;
      font-size: 0;
      overflow: hidden;
    }
  }
  .travel-icon{
    position: absolute;
    height: 16px * $baseMultiple;
    z-index: 1;
    opacity: .7;
    filter: alpha(opacity=70);
    background: #2d5f72;
    overflow: hidden;
    width: 49px * $baseMultiple;
    left: 0;
    border-top-right-radius: 4px * $baseMultiple;
    bottom: 0;
    padding: 0 12px;
    box-sizing: border-box;
    &:after{
      clear: both;
      display: block;
      height: 0;
      visibility: hidden;
      content: ".";
    }
    p{
      font-size: 12px * $baseMultiple;
      white-space: nowrap;
      height: 16px * $baseMultiple;
      color: #c4d0d6;
      text-align: center;
      line-height: 16px * $baseMultiple;
      display: block;
      float: right;
      
      &.icon{
        float: left;
      }
    }
  }
</style>
<style lang="scss">
// 轮播图是动态渲染，所以不能用局部样式
.item-doc{
  width: 20px;
  height: 20px;
  background: #999;
  opacity: 1;
}
.swiper-pagination-bullet-active{
  background: #ff4500;
}
</style>