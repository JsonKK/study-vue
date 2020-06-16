<template>
  <div>
    <div class="banner">
      <swiper :options="swiperOptions" class="swiper-wrap">
        <swiper-slide v-for="(item,index) in bannerImgs" :key="index">
          <img class="banner-img" :src="item" />
          <div class="banner-info">
            <div class="banner-tittle">
              {{sightName}}
            </div>
            <div class="banner-number">
              <span class="iconfont banner-icon">&#xe61e;</span>
              {{index+1}}/{{bannerImgs.length}}
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <fade-animation ref="gallery" >
      <gallery :imgs="bannerImgs" :index="checkIndex"></gallery>
    </fade-animation>
  </div>
</template>
 
<script>
  import {swiper,swiperSlide} from 'vue-awesome-swiper';
  import fadeAnimation from '../common/fadeAnimation.vue';
  import gallery from '../common/gallery.vue';
  let that;
  export default {
    name: 'detail-banner',
    props:{
      sightName: String,
      bannerImg: String,
      bannerImgs: Array
    },
    components: {
      swiper,swiperSlide,
      fadeAnimation,
      gallery
    },
    data(){
      that = this;
      return{
        swiperOptions : {
          autoplay: 3000,
          loop : true,
          onTap(event){
            //获取当前点击项的索引
            let index = event.realIndex;
            that.showPic(index);
          }
        },
        show : false,
        checkIndex : 0
      }
    },
    mounted(){},
    computed:{},
    methods:{
      //查看画廊
      showPic(index){
        this.checkIndex = index - 0;
        this.$refs.gallery.show = true;
      }
    },
    watch:{}
  }
</script>
 
<style lang="scss" scoped>
  .swiper-slide{
    height: 0;
    padding-bottom: 55%;
  }
  .banner{
    position: relative;
    overflow: hidden;
    height: 0;
    padding-bottom: 55%;
  }
  .banner-img{
    width: 100%;
  }
  .banner-info{
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 60px;
    color: #fff;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
    z-index: 2;
  }
  .banner-tittle{
    flex: 1;
    font-size: 32px;
    padding: 0 20px;
  }
  .banner-number{
    height: 32px;
    line-height: 32px;
    margin-top: 14px;
    padding: 0 40px;
    border-radius: 20px;
    background: rgba(0, 0, 0, .8);
    font-size: 24px;
  }
  .banner-icon{
    font-size: 24px;
  }  
</style>
 