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
            path : '/index/combination-api',
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
  justify-content: center;
  align-items: center;
  height: 40px;
  overflow-x: auto;
}
.tab-li{
  font-size: 14px;
  height: 36px;
  line-height: 36px;
  padding: 0 12px;
}
.tab-li-active{
  font-weight: bold;
  border-bottom: 2px solid #212121;
}
.view{
  padding: 20px 0;
}
</style>
 