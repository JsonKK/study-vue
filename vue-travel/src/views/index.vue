<template>
  <div class="content">
    <index-header></index-header>
    <index-touch-header></index-touch-header>
    <index-swiper></index-swiper>
    <index-touch-icon></index-touch-icon>
  </div>
</template>
<script>
import indexHeader from '@/components/index-header.vue';
import indexTouchHeader from '@/components/index-touch-header.vue';
import indexSwiper from '@/components/index-swiper.vue';
import indexTouchIcon from '@/components/index-touch-icon.vue';
export default {
  name : 'index',
  components : {
    indexHeader,
    indexTouchHeader,
    indexSwiper,
    indexTouchIcon
  },
  data(){
    return{}
  }
}
</script>