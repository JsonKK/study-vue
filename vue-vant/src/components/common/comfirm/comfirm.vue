<template>
  <div class="comfirm-box" v-show="modelShow">
    <transition name="fade">
      <div class="comfirm" v-if="show">
        <h4 class="title" v-if="!hideTitle">{{title}}</h4>
        <p class="message" v-html="content"></p>
        <div class="btn-box" :class="{'btn-box-center':hideCancel}">
          <div class="btn btn-cancel" @click="cancelEvent" v-if="!hideCancel">{{cancelText || '取消'}}</div>
          <div class="btn btn-submit" @click="onOkEvent">{{okText || '确定'}}</div>
        </div>
      </div>
    </transition>
  </div>
</template>
 
<script>
  let that;
  export default {
    name: 'comfirm',
    props : {
      //标题
      title : '',
      // 内容
      content : '',
      //是否隐藏标题
      hideTitle : false,
      //取消按钮文本
      cancelText : '取消',
      //隐藏取消按钮
      hideCancel : false,
      // 确定按钮文案
      okText : '确定',
      //v-model对外开放值
      value : {
        type : Boolean
      }
    },
    data(){
      that = this;
      return{
        //显示弹窗
        modelShow : this.value,
        show : false,
        //判断是否是通过方法调用
        isComfirm : false
      }
    },
    mounted(){},
    computed:{},
    methods:{
      //确认事件
      onOkEvent(){
        let {onOk} = this;
        //判断是否有确认回调，如果有的话执行
        onOk && onOk();
        //提交父组件确认事件
        this.$emit('on-ok');
        //关闭弹窗
        this.close();
      },
      //取消事件
      cancelEvent(){
        let {onCancel} = this;
        //判断是否有取消回调
        onCancel && onCancel();
        //提交父组件取消事件
        this.$emit('on-cancel');
        //关闭弹窗
        this.close();
      },
      // 关闭弹窗
      close(){
        let {isComfirm} = this;
        //隐藏弹窗
        this.modelShow = false;
        if(isComfirm){
          setTimeout(()=>{
            // 彻底销毁实例
            that.$destory && that.$destory();
            //删除节点
            document.body.removeChild(that.$el);
          },100);
        }
      }
    },
    watch : {
      //监听外部值变化，赋值给模板显隐
      value(modelShow){
        this.modelShow= modelShow;
      },
      //监听显隐变化传递给外层组件
      modelShow(value){
        this.show = value;
        this.$emit('input',value);
      }
    }
  }
</script>
 
<style lang="less" scoped>
  .comfirm-box{
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background-color: rgba(0,0,0,0.3);
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 6;
  }
  .comfirm{
    padding: 40px;
    border-radius: 32px;
    background-color: #fff;
    width: 600px;
    max-height: 70vh;
    box-sizing: border-box;
    text-align: center;
    overflow-y: auto;
  }
  .title{
    font-size: 38px;
    color: #353535;
    line-height: 50px;
  }
  .message{
    font-size: 28px;
    color: #353535;
  }
  .btn-box{
    display: flex;
    justify-content: space-around;
    margin-top: 36px;
  }
  .btn-box-center{
    justify-content: center;
  }
  .btn{
    min-width: 240px;
    max-width: 250px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 22px;
    line-height: 44px;
    font-size: 34px;
    border: 2px solid transparent;
    border-radius: 44px;
    box-sizing: border-box;
  }
  .btn-cancel{
    border-color: #EAEAEA;
    color: #737373;
  }
  .btn-submit{
    background: #FFD321;
    border-color: #FFD321;
    color: #282121;
  }
  .fade-enter-active, .fade-leave-active {
    transition: all .3s;
  }
  .fade-enter /* .fade-leave-active below version 2.1.8 */ {
    transform: scale(0.3);
    opacity: .8;
  }
  .fade-leave-to{
    transform: scale(0.8);
    opacity: .8;
  }
</style>
 