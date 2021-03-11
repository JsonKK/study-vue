<template>
  <ul>
    <!-- v-if优先级高于v-for所以内容没有被显示出来 -->
    <!-- 在data里设置index，这时候循环列表里的if取的Index就是data里的，所以数据被渲染出来 -->
    <li v-for="(item,index) in list" v-if="index % 2 == 0">{{index}}</li>
  </ul>
</template>

<script>
  export default {
    name: '',
    data() {
      return {
        list : new Array(10),
        index : 0
      }
    }
  }
</script>

<style lang="scss" scoped>
  
</style>