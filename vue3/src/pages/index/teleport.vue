<template>
  <button @click="modalOpen = true">
      Open full screen modal! (With teleport!)
  </button>

  <!-- 把结构渲染到id为other-view的容器内 -->
  <teleport to="#other-view">
    <child />
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
  import child from 'comps/child.vue';
  import { reactive } from 'vue'
  console.log(child)
  const state = reactive({ modalOpen: false})
  // export default {
  //   name: 'indexTeleport',
  //   data(){
  //     return{
  //       modalOpen: false
  //     }
  //   },
  //   mounted(){}
  // }
</script>
 
<style lang="scss" scoped></style>
 