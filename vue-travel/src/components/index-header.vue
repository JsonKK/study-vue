<template>
  <div class="header-box">
    <header>
      <router-link to="./search">
        <div class="left iconfont">
          <span class="placeholder">搜索景点门票</span>
        </div>
      </router-link>
      <div class="right">下载App</div>
      
    </header>
  </div>
</template>

<script>
  export default {
    name: 'index-header',
    data() {
      return {
        
      }
    }
  }
</script>

<style lang="scss" scoped>
  .header-box{
    margin-top: 14px;
  }
  header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    padding: 0 30px;
  }
  .left{
    width: 560px;
    height: 72px;
    line-height: 72px;
    overflow: hidden;
    background-color: #eeeeee;
    color: #a5a5a5;
    font-size: 32px;
    &:before{
      content: "\e741";
      font-size: 46px;
      vertical-align: middle;
      margin: 0 12px;
    }

  }
  .right{
    width: 92px;
    height: 94px;
    background: url(../assets/img/logo.gif) no-repeat center top;
    background-size: 48px 48px;
    box-sizing: border-box;
    padding-top: 50px;
    font-size: 24px;
    line-height: 42px;
    text-align: center;
  }
</style>