<template>
  <div id="xixihaha">
    <m-render :level="2">
      渲染函数默认slot
      <span slot="name">渲染函数key为name slot</span>
    </m-render>
    <!-- <button @click="showToast">触发吐司</button>
    <button @click="showComfirm">触发确认弹窗</button>
    <button @click="showComfirmComponents">触发组件版的确认弹窗</button> -->
    <comfirm title="标题" content="内容哈哈哈哈哈哈哈哈哈" ok-text="a" v-model="showComfirm2"></comfirm>
  </div>
</template>
 
<script>
  import mRender from './render';
  import comfirm from '../../components/common/comfirm/comfirm.vue';
  export default {
    name: 'vue-render-path',
    props:{},
    components: {
      mRender,
      comfirm
    },
    data(){
      return{
        showComfirm2 : false
      }
    },
    mounted(){},
    computed:{},
    methods:{
      showToast(){
        this.$toast({
          content : '上面写的东西跟普通的一个单文件Vue组件没有什么太大的区别。不过区别就在于，没有props了，那么是如何通过外部来控制这个组件的显隐呢？所以还需要一个js文件来接管这个组件，并调用extend方法。同目录下可以创建一个index.js的文件。上面写的东西跟普通的一个单文件Vue组件没有什么太大的区别。不过区别就在于，没有props了，那么是如何通过外部来控制这个组件的显隐呢？所以还需要一个js文件来接管这个组件，并调用extend方法。同目录下可以创建一个index.js的文件。上面写的东西跟普通的一个单文件Vue组件没有什么太大的区别。不过区别就在于，没有props了，那么是如何通过外部来控制这个组件的显隐呢？所以还需要一个js文件来接管这个组件，并调用extend方法。同目录下可以创建一个index.js的文件。',
          duration : 10000
        })
      },
      showComfirm(){
        this.$comfirm({
          content : '上面写的东西跟普通的一个单文件Vue组件没有什么太大的区别。不过区别就在于，没有props了，那么是如何通过外部来控制这个组件的显隐呢？',
          cancelText : '嘻嘻嘻哈哈哈',
          okText : '哼哼哈伊',
          onOk(){
            console.log('xixihaha ')
          },
          onCancel(){
            console.log('取消')
          }
        })
      },
      showComfirmComponents(){
        this.showComfirm2 = true;
      }
    },
    watch:{}
  }
</script>
 
<style scoped lang="less">
button{
  display: block;
  font-size: 20px;
  line-height: 40px;
  
}
</style>
 