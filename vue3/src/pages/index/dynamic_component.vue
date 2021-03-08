<template>
  <div class="main">
    <h1>动态组件渲染</h1>
    <ul class="tab-ul">
      <li class="tab-li" 
          :class="{'tab-li-active':(index+1) == actived}" 
          v-for="(item,index) in tabs">
        {{item.title}}
      </li>
    </ul>
  </div>
</template>

<script>
  import {reactive,toRefs} from 'vue';
  export default {
    name: 'dynamic_component',
    setup(){
      const data = reactive({
        tabs : [
          {title : '组件A'},
          {title : '组件B'},
          {title : '组件C'},
        ],
        actived : 1
      })
      return {...toRefs(data)};
    }
  }
</script>

<style lang="scss" scoped>
  .tab-ul{
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
  .tab-li{
    padding: 10px 20px;
    border-radius: 4px;
    background-color: #ddd;
    margin: 0 10px;
  }
  .tab-li-active{
    background-color: #aaa;
  }
</style>