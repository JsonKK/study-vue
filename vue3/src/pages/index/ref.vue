<template>
  <div v-for="(item,index) in list" :ref="setItemRef">
    <p>title:{{item.title}};index:{{index}}</p>
  </div>
  <child ref="childRef"/>
  <p>{{msg}}</p>
  <son ref="sonRef"/>
  <p>{{sonMsg}}</p>
  <div class="animate-dom" ref="animateDom">我要动起来</div>
</template>

<script>
  import { onBeforeUpdate, onUpdated ,onMounted,ref,reactive,toRefs} from 'vue';
  import child from 'comps/ref/child.vue';
  import son from 'comps/ref/son.vue';
  import velocity from 'velocity-animate';
  export default {
    name: 'ref',
    components : {child,son},
    data() {
      return {
        itemRefs: [],
        list : [
          {title:'a'},
          {title:'b'},
          {title:'c'}
        ]
      }
    },
    mounted(){
      //refs实例方法被保留，可以使用
      console.log(this.$refs.sonRef.msg);
    },
    setup() {
      //不定项数组ref，后续跟进用法
      let itemRefs = []
      // 设置动态ref
      const setItemRef = el => {
        if (el) {
          itemRefs.push(el)
        }
      }

      //定义child ref
      //切记一定要在ref中返回
      const sonRef = ref();
      const childRef = ref();
      const animateDom = ref(null);
      //定义响应数据
      const data = reactive({msg:'',sonMsg : ''});
      onBeforeUpdate(() => {
        itemRefs = []
      })
      onUpdated(() => {
        // console.log(itemRefs)
      })
      onMounted(()=>{
        console.log(itemRefs)
        //获取子组件属性
        data.msg = childRef.value.msg;
        data.sonMsg = sonRef.value.msg;
        // 测试velocity插件库
        // if(animateDom.value){
        //   velocity(animateDom.value,{translateX: 1750},{duration: 3000})
        //   console.log('animateDom',animateDom);
        // }
      })
      return {
        setItemRef,
        sonRef,
        childRef,
        animateDom,
        ...toRefs(data)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .animate-dom{
    padding: 5px 15px;
    background-color: brown;
    color: #fff;
    border-radius: 20px;
    display: inline-block;
  }
</style>