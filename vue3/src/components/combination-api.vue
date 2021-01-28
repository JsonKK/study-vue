<template>
  <p class="text">{{counter}}</p>
  <p class="text">{{twiceTheCounter}}</p>
  <div class="row">
    <button @click="add(this)">add</button>
    &emsp;
    <button @click="cut(this)">cut</button>
  </div>

</template>
 
<script>
  import { ref , onMounted, watch, toRefs ,computed} from 'vue'
  //目前还不知道ref的作用和使用场景
  const counter = ref(0)
  //在组件外部引入计算属性
  const twiceTheCounter = computed(()=>{ return counter.value * 2});

  function add(vm){
    vm.counter++;
  }

  function cut(vm){
    vm.counter--;
  }

  function init(){
    console.log('page is init!!');
  }

  export default {
    props: {
      user: {
        type: String,
        required: true
      }
    },
    components: {},
    data(){
      return{
        repositories : [],
        filters : {},
        searchQuery : ''
      }
    },
    setup(props){
      // 如果想要监控props上的属性变化，需要使用toRefs方法导出需要监控的Key
      const { user } = toRefs(props);
      console.log(user);
      //监听prop上的user属性变化
      watch(user,(newValue,oldValue)=>{
        console.log('变化的user',newValue,oldValue);
      })

      //监听data上某个值的变化
      watch(counter, (newValue, oldValue) => {
        console.log('The new counter value is: ' + counter.value)
      })
      
      //初始化页面
      //方法不能在组件实例外部调用
      onMounted(init);


      return {
        counter,add,cut,twiceTheCounter
      }
    }
  }
</script>
 
<style></style>
 