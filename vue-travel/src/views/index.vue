<template>
  <div class="content">
    <index-header></index-header>
    <index-touch-header></index-touch-header>
    <index-swiper></index-swiper>
  </div>
</template>
<script>
import indexHeader from '@/components/index-header.vue';
import indexTouchHeader from '@/components/index-touch-header.vue';
import indexSwiper from '@/components/index-swiper.vue';
export default {
  name : 'index',
  components : {
    indexHeader,
    indexTouchHeader,
    indexSwiper
  },
  data(){
    return{}
  }
}
</script>