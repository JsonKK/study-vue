<template>
  <div class="title">
    <h3 style="font-weight: 600; text-decoration: none; font-style: inherit; text-align: left; font-size: 16px; color: rgb(51, 51, 51);">2222222222222222222222222222222222222222</h3> 
    <p style="font-weight: 400; text-decoration: none; font-style: inherit; text-align: left; font-size: 12px; color: rgb(102, 102, 102);">副标题文案 - 作者 - 2019.09.09副标题文案 - 作者 - 2019.09.09副标题文案 - 作者 - 2019.09.09副标题文案 - 作者 - 2019.09.09副标题文案 - 作者 - 2019.09.09副标题文案 - 作者 - </p>
  </div>
</template>

<script>
  export default {
    name: 'm-title',
    data() {
      return {
        
      }
    }
  }
</script>

<style lang="less" scoped>
  .title{
    position: relative;
    box-sizing: border-box;
    padding: 20px;
    h3{
      display: block;
      width: 100%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
</style>