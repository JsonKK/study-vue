<template>
  <button @click="modalOpen = true">
    Open full screen modal! (With teleport!)
  </button>
  <teleport to="#other-view">
    <!-- 可以包含组件 -->
    <child/>
    <div v-if="modalOpen" class="modal">
      <div>
        I'm a teleported modal! 
        (My parent is "body")
        <button @click="modalOpen = false">
          Close
        </button>
      </div>
    </div>
  </teleport>
</template>
 
<script>
  import child from 'comps/child.vue';;
  import {ref,inject,nextTick} from 'vue';
  export default {
    name: 'teleport',
    components: {child},
    data(){
      return{
      }
    },
    setup(){
      let modalOpen = ref(false);
      //获取全局属性
      const testUserInfo = inject('$testUserInfo');
      console.log(testUserInfo);

      //dom渲染后执行方法
      nextTick(()=>{
        console.log('dom已经渲染完成！');
      })
      return{
        modalOpen
      }
    },
    mounted(){},
    computed:{},
    methods:{}
  }
</script>
 
<style lang="scss"></style>
 