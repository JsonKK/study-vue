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
  import {ref} from 'vue';
  export default {
    name: 'teleport',
    components: {child},
    data(){
      return{
      }
    },
    setup(){
      let modalOpen = ref(false);
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
 