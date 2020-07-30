<template>
  <div class="text">fdsfdsffdsfdsffdsfdsffdsfdsffdsfdsffdsfdsffdsfdsffdsfdsffdsfdsffdsfdsf{{text}}</div>
</template>

<script>
  export default {
    name: 'm-text',
    props : {
      text : {
        type : String,
        default : ''
      }
    },
    data() {
      return {
        
      }
    }
  }
</script>

<style lang="less" scoped>
  @import '~@/assets/style/vars.less';
  .text{
    font-weight: 400;
    text-decoration: none;
    font-style: inherit;
    text-align: left;
    color: @text-normal;
    background-size: contain;
    font-size: 12px;
    line-height: 1.5;
    padding: 10px 15px;
    word-break: break-word;
  }
</style>