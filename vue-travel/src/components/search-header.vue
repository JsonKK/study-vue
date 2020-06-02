<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont header-back">&#xe629;</div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'search-header',
    data() {
      return {
        
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import 'styles/mixin.scss';
  .header{
    position: relative;
    overflow: hidden;
    height: $headerHeight;
    line-height: $headerHeight;
    text-align: center;
    color: #fff;
    background: $bgColor;
    font-size: 32px;
  }
  .header-back{
    position: absolute;
    top: 0;
    left: 0;
    width: 64px;
    text-align: center;
    font-size: 40px;
    color: #fff;
  }
</style>