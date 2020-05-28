<template>
  <div class="middle-main">
    <m-havling></m-havling>
    <edit-container :is-current="true">
      <m-text></m-text>
    </edit-container>
    <m-havling></m-havling>
    <edit-container>
      <m-title></m-title>
    </edit-container>
    <m-havling></m-havling>
  </div>
</template>

<script>
  // 文本组件
  import mText from './components/text.vue';
  // 分割线组件
  import mHavling from './components/havling.vue';
  // 标题模块
  import mTitle from './components/title.vue';
  // 选中容器
  import editContainer from './components/edit-container.vue';
  export default {
    name: 'h5-factory-middle',
    components:{
      mText,
      mHavling,
      mTitle,
      editContainer
    },
    data() {
      return {
        
      }
    }
  }
</script>

<style lang="less" scoped>
  
</style>