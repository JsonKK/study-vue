<template>
  <div class="content">
    <index-header></index-header>
    <index-touch-header></index-touch-header>
  </div>
</template>
<script>
import indexHeader from '@/components/index-header.vue';
import indexTouchHeader from '@/components/index-touch-header.vue';
export default {
  name : 'index',
  components : {
    indexHeader,
    indexTouchHeader
  },
  data(){
    return{}
  }
}
</script>