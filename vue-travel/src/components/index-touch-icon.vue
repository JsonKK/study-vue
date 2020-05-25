<template>
  <div>
    <swiper :options="swiperOptions">
      <swiper-slide v-for="(item,index) in list" :key="'swiper'+index">
        <div class="icon">
          <div class="img-box">
            <img :src="item.img" alt="图标">
          </div>
          <p class="icon-desc">{{item.title}}</p>
        </div>
      </swiper-slide>
    
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import normalData from '../utils/normalData';
const {touchList} = normalData;
export default {
  nama : 'index-touch-icon',
  components : {
    swiper,swiperSlide
  },
  data(){
    return{
      swiperOptions : {
        autoplay: 5000,
        slidesPerView : 5,
        //滑动区域分组
        // slidesPerGroup : 3,
        slidesPerColumn : 2,
      },
      list : [...touchList.rowOne,...touchList.rowTwo,...touchList.rowThree]
    }
  }
}
</script>

<style lang="scss" scoped>
  //引入主要样式
  @import '@/assets/css/main.scss';
  $base : 2;
  .icons{
    height: 0;
    padding-bottom: 40%;
    overflow: hidden;
  }
  .swiper-slide{
    height: 50%;
  }
  .swiper-container{
    width: 100%;
    max-width: 750px;
    height: 750px / $base;
    overflow: hidden;
  }
  .icon{
    overflow: hidden;
    float: left;
    height: 0;
    width: 100%;
    // padding-bottom: 25%;
    height: 100%;
    position: relative;
  }
  .img-box{
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 44px;
    img{
      display: block;
      height: 80%;
      margin: 10% auto;
    }
  }
  .icon-desc{
    font-size: 24px;
    height: 44px;
    line-height: 44px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: $fontCorlor;
    text-align: center;
  }
</style>