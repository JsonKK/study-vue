<template>
  <div id="xixihaha">
    <m-render :level="2">
      渲染函数标签
    </m-render>
    <button @click="showToast">触发</button>
  </div>
</template>
 
<script>
  import mRender from './render';
  //引入吐司组件
  import toast from '../../components/common/toast/toast.vue';
  export default {
    name: 'vue-render-path',
    props:{},
    components: {
      mRender,
      toast
    },
    data(){
      return{}
    },
    mounted(){},
    computed:{},
    methods:{
      showToast(){
        this.$toast({
          message : '上面写的东西跟普通的一个单文件Vue组件没有什么太大的区别。不过区别就在于，没有props了，那么是如何通过外部来控制这个组件的显隐呢？所以还需要一个js文件来接管这个组件，并调用extend方法。同目录下可以创建一个index.js的文件。上面写的东西跟普通的一个单文件Vue组件没有什么太大的区别。不过区别就在于，没有props了，那么是如何通过外部来控制这个组件的显隐呢？所以还需要一个js文件来接管这个组件，并调用extend方法。同目录下可以创建一个index.js的文件。上面写的东西跟普通的一个单文件Vue组件没有什么太大的区别。不过区别就在于，没有props了，那么是如何通过外部来控制这个组件的显隐呢？所以还需要一个js文件来接管这个组件，并调用extend方法。同目录下可以创建一个index.js的文件。'
        })
      }
    },
    watch:{}
  }
</script>
 
<style></style>
 