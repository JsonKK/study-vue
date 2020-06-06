<template>
  <div class="header-box">
    <router-link to="./search" tag="header" >
      <div class="left iconfont">
        <span class="placeholder">搜索城市列表</span>
      </div>
      <div class="right">{{city}}</div>
    </router-link>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: 'index-header',
    data() {
      return {
        
      }
    },
    computed : {
      //如果想要使用新的key可以采用对象的方式
      ...mapState(
        {currentCity : 'city'}
      ),
      // 如果希望直接引用的话，可以采用数组的方式
      ...mapState(['city'])
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
    min-width: 100px;
    height: 72px;
    line-height: 72px;
    overflow: hidden;
    background-color: #eeeeee;
    color: #a5a5a5;
    font-size: 32px;
    margin-right: 30px;
    flex: 1;
    &:before{
      content: "\e741";
      font-size: 46px;
      vertical-align: middle;
      margin: 0 12px;
    }

  }
  .right{
    min-width: 92px;
    height: 94px;
    background: url(../assets/img/logo.gif) no-repeat center top;
    background-size: 48px 48px;
    box-sizing: border-box;
    padding-top: 50px;
    font-size: 24px;
    line-height: 42px;
    white-space: nowrap;
    text-align: center;
  }
</style>