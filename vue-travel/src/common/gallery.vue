<template>
  <div class="container" @click="hidePop">
    <div class="wrapper">
      {{index}}
      <swiper :options="swiperOptions">
        <swiper-slide
          v-for="(item, index) in imgs"
          :key="index"
          @click="alert(2)"
        >
          <img class="gallary-img" :src="item" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
 
<script>
  import {swiper,swiperSlide} from 'vue-awesome-swiper';
  let that;
  export default {
    name: 'gallery',
    props:{
      imgs: {
        type: Array,
        default () {
          return []
        }
      },
      index : {
        type : Number,
        default : 0
      }
    },
    components: {
      swiper,swiperSlide
    },
    data(){
      that = this;
      return{
        swiperOptions: {
          pagination: '.swiper-pagination',
          paginationType: 'fraction',
          observeParents: true,
          observer: true,
          autoHeight: true,
          updateAutoHeight : 2000,
          onTap(){
            that.hidePop();
          }
        }
      }
    },
    mounted(){},
    watch:{
      index : {
        handler : function(value){
          this.$set(this.swiperOptions,'initialSlide',value);
          console.log(this.swiperOptions.initialSlide)
          // this.swiperOptions.initialSlide = value;
        },
        deep : true,
        immediate : true
      }
    },
    methods:{
      hidePop(){
        this.$parent.$emit('hide')
      }
    }
  }
</script>
 
<style lang="scss" scoped>
    
  .container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 99;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #000;
    .swiper-container{
      overflow: inherit;
    }
    .wrapper{
      height: 0;
      width: 100%;
      padding-bottom: 100%;
      .gallary-img{
        width: 100%;
      }
      .swiper-pagination{
        color: #fff;
        bottom: -100px;
      }
    }
      
  }

</style>
 