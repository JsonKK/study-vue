<template>
  <div class="edit-container" :class="{current:isCurrent}">
    <slot></slot>
    <template v-if="isCurrent">
      <div class="comp-menu">
        <a href="javascript:void(0)" class="">
          <span class="tips">上移</span> 
          <icon type="md-arrow-round-up" />
        </a> 
        <a href="javascript:void(0)" class="disabled">
          <span class="tips">下移</span> 
          <icon type="md-arrow-round-down" />
        </a> 
        <a href="javascript:void(0)">
          <span class="tips">删除</span> 
          <icon type="md-close-circle" />
        </a>
      </div>
    </template>
  </div>
</template>

<script>
  export default {
    name: 'edit-container',
    props : {
      isCurrent : false
    },
    data() {
      return {
        
      }
    }
  }
</script>

<style lang="less" scoped>
  .edit-container{
    width: 100%;
    background-color: transparent;
    position: relative;
    border: 1px solid #f2f3f4;
    -webkit-transition: opacity .1s ease-out;
    transition: opacity .1s ease-out;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    z-index: auto;
    opacity: 1;
    cursor: pointer;
    &.current{
      border-color:#2aa7ff;
    }
  }
  .comp-menu{
    position: absolute;
    display: block;
    top: 0;
    right: -38px;
    width: 32px;
    >a{
      display: inline-block;
      position: relative;
      width: 36px;
      height: 36px;
      margin-bottom: 2px;
      text-align: center;
      color: #666;
      background: #fff;
      font-size: 18px;
      line-height: 36px;
      &.disabled{
        color: #e4e4e4;
      }
      .tips{
        font-size: 12px;
        position: absolute;
        left: 120%;
        background-color: #111;
        height: 18px;
        padding: 0 5px;
        line-height: 19px;
        border-radius: 2px;
        white-space: nowrap;
        display: none;
        color: #eee;
        top: 5px;
      }
      .fa{
        display: inline-block;
        font: normal normal normal 14px/1 FontAwesome;
        font-size: inherit;
        text-rendering: auto;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
    }
  }
</style>