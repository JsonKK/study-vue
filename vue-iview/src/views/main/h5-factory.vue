<template>
  <div class="content">
    <div class="left">
      <left></left>
    </div>
    <div class="middle">
      <div class="toolbar">
        <i-button class="mr">预览</i-button>
        <i-button class="mr" type="primary">保存</i-button>
      </div>
      <div class="main">
        <middle></middle>
      </div>
    </div>
    <div class="right">
      <right></right>
    </div>
    
  </div>
</template>

<script>
  import left from '../../components/h5-factory/left/main.vue';
  import middle from '../../components/h5-factory/middle/main.vue';
  import right from '../../components/h5-factory/right/main.vue';
  export default {
    name: 'h5Factory',
    components : {
      left,middle,right
    },
    data() {
      return {
        
      }
    }
  }
</script>

<style lang="less" scoped>
  .content{
    width: 100%;
    min-width: 1080px;
    height: 800px;
    display: flex;
    >div{
      overflow-y: auto;
    }
  }
  .left{
    width: 280px;
    border-right: 1px solid #e8e8e8;
  }
  .middle{
    flex: 1;
    min-width: 400px;
    background-color: #f2f3f4;
    position: relative;
    .main{
      position: relative;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 377px;
      min-height: 667px;
      padding-bottom: 200px;
      margin: 0 auto;
      background-color: #fff;
      -webkit-transform: translateX(-20px);
      transform: translateX(-20px);
    }
  }
  .right{
    width: 280px;
    border-left: 1px solid #e8e8e8;
  }
  .toolbar{
    width: 100%;
    padding: 10px;
    background-color: #fff;
    margin-bottom: 20px;
  }
  .mr{
    margin-right: 12px;
  }
</style>
<style>
.ivu-card-body{
  padding: 0;
}
</style>