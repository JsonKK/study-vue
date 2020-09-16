<template>
  <div class="toast-box" :class="[location ? 'toast-location-' + location : '']">
    <transition name="fade">
      <div class="toast-info" v-if="show">{{message}}</div>
    </transition>
  </div>
</template>
 
<script>
  let that;
  export default {
    data(){
      that = this;
      return{
        show : false,
        //吐司关闭时间
        closeTime : 3000,
        //吐司所在位置
        location : ''
      }
    },
    mounted(){
      this.setTimerClose();
    },
    methods : {
      setTimerClose(){
        let {closeTime} = this;
        setTimeout(()=>{
          this.close();
        },closeTime)
      },
      close(){
        //隐藏该组件
        this.show = false;
        setTimeout(()=>{
          //完全销毁一个实例
          that.$destroy && that.$destroy();
          //从页面上消除该节点
          that.$el && that.$el.parentNode && that.$el.parentNode.removeChild(that.$el);
        },500)
      }
    }
  }
</script>
 
<style lang="less" scoped>
  .toast-box{
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,0.3);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0;
    top: 0;
    box-sizing: border-box;
    padding: 30px 0;
  }
  .toast-location-bottom{
    align-items: flex-end;
  }
  .toast-location-top{
    align-items: flex-start;
  }
  .toast-info{
    padding: 20px;
    line-height: 40px;
    border-radius: 10px;
    background-color: #212121;
    color: #fff;
    font-size: 28px;
    text-align: center;
    max-width: 500px;
    max-height: 70vh;
    overflow-y: auto;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
 