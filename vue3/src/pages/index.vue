<template>
  <section class="main">
    <h4 class="bold">各种新特性api</h4>
    <ul class="tab-ul">
      <li class="tab-li"
          :class="{'tab-li-active':item.name == routerName}" 
          v-for="(item,index) in tabs" :key="index"
          @click="linkPage(item)">
        {{item.title}}
      </li>
    </ul>
  </section>
  <section id="other-view"></section>
  <section class="view">
    <router-view></router-view>
  </section>
  
</template>
 
<script>
  export default {
    name: 'index',
    data(){
      return{
        tabs : [
          { 
            name : 'indexCombinationApi',
            path : '/index/combination_api',
            title : '组合式api'
          },
          {
            name : 'indexTeleport',
            path : '/index/teleport',
            title : 'teleport'
          },
          {
            name : 'attrs',
            path : '/index/attrs',
            title : 'attrs'
          },
          {
            name : 'vmodel',
            path : '/index/vmodel',
            title : 'vmodel'
          },
          {
            name : 'provide_inject',
            path : '/index/provide_inject',
            title : 'provide_inject'
          },
          {
            name : 'dynamic_component',
            path : '/index/dynamic_component',
            title : '异步组件'
          },
          {
            name : 'ref',
            path : '/index/ref',
            title : 'ref'
          },
          {
            name : 'custom_bind',
            path : '/index/custom_bind',
            title : '自定义属性'
          }
        ]
      }
    },
    mounted(){
    },
    computed:{
      routerName(){
        return this.$route.name;
      }
    },
    methods:{
      linkPage(item){
        this.$router.push({
          path : item.path
        })
      }
    }
  }
</script>
 
<style lang="scss" scoped>
h4{
  font-weight: bold;
  font-size: 22px;
}
.tab-ul{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 40px;
  overflow-x: auto;
  margin: 0 auto;
  flex-wrap: nowrap;
  flex-direction :row;
  width: 90%;
  margin:  0 auto;
}
.tab-li{
  font-size: 14px;
  height: 36px;
  line-height: 36px;
  padding: 0 12px;
  flex : 1;
  box-sizing: border-box;
  white-space: nowrap;
  flex-grow:0;
  flex-shrink:0;
}
.tab-li-active{
  font-weight: bold;
  border-bottom: 2px solid #212121;
}
.view{
  padding: 20px 0;
}
</style>
 