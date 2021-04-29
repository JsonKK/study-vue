<template>
  <div v-for="(item,index) in list" :ref="setItemRef">
    <p>title:{{item.title}};index:{{index}}</p>
  </div>
  <child ref="childRef"/>
  <p>{{msg}}</p>
  <son ref="sonRef"/>
  <p>{{sonMsg}}</p>
</template>

<script>
  import { onBeforeUpdate, onUpdated ,onMounted,ref,reactive,toRefs} from 'vue';
  import child from 'comps/ref/child.vue';
  import son from 'comps/ref/son.vue';
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
      console.log(this.$refs.sonRef.msg)
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
      })
      return {
        setItemRef,
        sonRef,
        childRef,
        ...toRefs(data)
      }
    }
  }
</script>

<style lang="scss" scoped>
  
</style>