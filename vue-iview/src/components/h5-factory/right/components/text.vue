<template>
  <div class="text" >
    <i-form :label-width="80">
      <h4>【文本】</h4>
      <form-item label="组件编号" class="limit-mb">
        <div class="line-text">text</div>
      </form-item>
      <form-item label="组件名称" class="limit-mb">
        <i-input placeholder="非必填，页内跳转使用" class="limit-w"></i-input>
      </form-item>
      <form-item label="文本内容" class="limit-mb">
        <i-input placeholder="默认文本" type="textarea" class="limit-w"></i-input>
      </form-item>
    </i-form>
  </div>
</template>

<script>
  export default {
    name: 'm-text',
    data() {
      return {
        
      }
    }
  }
</script>

<style lang="less" scoped>
  
  
</style>