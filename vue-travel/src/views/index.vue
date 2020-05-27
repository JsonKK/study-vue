<template>
  <div class="content">
    <index-header></index-header>
    <index-touch-header></index-touch-header>
    <index-swiper></index-swiper>
    <index-touch-icon></index-touch-icon>
    <index-recommend :list="recommendList"></index-recommend>
    <index-weekend :list="weekendList"></index-weekend>
  </div>
</template>
<script>
import indexHeader from '@/components/index-header.vue';
import indexTouchHeader from '@/components/index-touch-header.vue';
import indexSwiper from '@/components/index-swiper.vue';
import indexTouchIcon from '@/components/index-touch-icon.vue';
import indexRecommend from '@/components/index-recommend.vue';
import indexWeekend from '@/components/index-weekend.vue';
import axios from 'axios';
export default {
  name : 'index',
  components : {
    indexHeader,
    indexTouchHeader,
    indexSwiper,
    indexTouchIcon,
    indexRecommend,
    indexWeekend
  },
  data(){
    return{
      // 推荐列表
      recommendList : [],
      //周末列表
      weekendList : []
    }
  },
  mounted(){
    this.initIndexData();
  },
  methods : {
    //获取首页数据
    initIndexData(){
      axios.get('/api/index.json').then((res)=>{
        this.renderIndex(res);
      })
    },
    renderIndex(res={}){
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        // this.swiperList = data.swiperList
        // this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  }
}
</script>