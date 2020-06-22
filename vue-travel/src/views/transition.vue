<template>
  <div class="box" id="box">
    <div class="tab">
      <div class="tab-item" @click="left">向左</div>
      <div class="tab-item" @click="right">向右</div>
    </div>
    <ul class="animate-info">
      <swiper :options="swiperOptions" ref="mySwiper">
        <swiper-slide>
          <li class="white">white</li>
        </swiper-slide>
        <swiper-slide>
          <li class="red">red</li>
        </swiper-slide>
        <swiper-slide>
          <li class="yellow">yellow</li>
        </swiper-slide>
        <swiper-slide>
          <li class="green">green</li>
        </swiper-slide>
      </swiper>
      
    </ul>
  </div>
</template>
 
<script>
  import {swiper,swiperSlide} from 'vue-awesome-swiper';
  export default {
    name: 'transition',
    props:{},
    components: {
      swiper,swiperSlide
    },
    data(){
      return{
        index:0,
        swiperOptions: {
          pagination: '.swiper-pagination',
          paginationType: 'fraction',
          observeParents: true,
          observer: true,
          autoHeight: true,
          updateAutoHeight : 0,
          onTap(){
            // that.hidePop();
          },
          onSlideChangeStart(swiper){
            console.log(swiper.realIndex)
            this.index = swiper.realIndex;
            let domContent = document.getElementById('box');
            domContent.scrollTo(0,0);
          }
        }
      }
    },
    mounted(){},
    computed:{
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    methods:{
      left(){
        let {index} = this;
        if(index>0){
          index--;
          this.index = index;
          this.swiper.slideTo(index,100)
        }
        
      },
      right(){
        let {index} = this;
        if(index<3){
          index++;
          this.index = index;
          this.swiper.slideTo(3,100)
        }
      }
    }                    
  }
</script>
 
<style lang="scss" scoped>
.box{
  width: 100%;
  height: 100vh;
  overflow: hidden;
  overflow-y: auto;
  position: relative;
  background-color: #fff;
}
.tab{
  width: 100%;
  height: 50px;
  line-height: 50px;
  overflow: hidden;
  border-bottom: 1px solid #ccc;
  background-color: #f5f5f5;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
}
.tab-item{
  float: left;
  width: 50%;
  text-align: center;
}
.animate-info{
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-top: 50px;
  will-change: transform;
  transition: all 500ms;
  position: absolute;
  li{
    float: left;
    width: 100%;
    min-height: 100vh;
  }
  .white{
    background-color: #fff;
    height: 200vh;
  }
  .red{
    background-color: red;
    height: 120vh;
  }
  .yellow{
    background-color: yellow;
  }
  .green{
    background-color: green;
  }
}

</style>
 