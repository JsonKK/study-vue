<template>
  <div class="right-main">
    <!-- <m-text></m-text> -->
    <m-title></m-title>
  </div>
</template>

<script>
  import mText from './components/text.vue';
  import mTitle from './components/title.vue';
  export default {
    name: 'h5-factory-right',
    components:{
      mText,
      mTitle
    },
    data() {
      return {
        
      }
    }
  }
</script>

<style lang="less" scoped>
  .right-main{
    padding: 10px;
  }
</style>