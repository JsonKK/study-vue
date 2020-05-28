<template>
  <div class="havling"></div>
</template>

<script>
  export default {
    name: 'havling',
    data() {
      return {
        
      }
    }
  }
</script>

<style lang="less" scoped>
  .havling{
    position: relative;
    display: block;
    height: 10px;
    text-align: center;
    font-size: 0;
    background: #fff;
    background-image: linear-gradient(#fff 2px,transparent 0),linear-gradient(90deg,#999 1px,transparent 0);
    background-size: 3px 3px,3px 3px;
  }
</style>