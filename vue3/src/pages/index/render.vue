<template>
  <m-render :level="2" v-model:value="value">
    <span>我是render函数的默认slot</span>
  </m-render>
</template>

<script>
  import mRender from '../../components/render';
  export default {
    name : 'render',
    components : {mRender},
    data() {
      return {
        value : 'to do something'
      }
    }
  }
</script>

<style lang="scss" scoped>
  
</style>