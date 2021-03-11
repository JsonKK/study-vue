<template>
  <div class="main">
    <h1>动态/异步组件渲染</h1>
    <ul class="tab-ul">
      <li class="tab-li" 
          :class="{'tab-li-active':index == actived}" 
          v-for="(item,index) in tabs"
          @click="changeli(index)">
        {{item.title}}
      </li>
    </ul>
  </div>
  <keep-alive>
    <component :is="comps[actived]"></component>
  </keep-alive>
  <component
    is="myD"
    level="2"
    msg="组件函数"
  >
  </component>
  <!-- <component :is="'myE'" /> -->
  <component is="myF" />
</template>

<script>
  import {reactive,toRefs,defineAsyncComponent,markRaw,getCurrentInstance,inject} from 'vue';
  import myD from 'comps/dynamic_component/d.vue';
  // import myE from 'comps/dynamic_component/e.vue';
  import myF from 'comps/dynamic_component/f.vue';
  const data = reactive({
    tabs : [
      {
        title : '组件A'
      },
      {title : '组件B'},
      {title : '组件C'},
    ],
    actived : 0
  })
  const comps = markRaw([
    defineAsyncComponent(()=> import('comps/dynamic_component/a.vue')),
    //通过异步回调组件
    defineAsyncComponent(()=> {
      return new Promise((resolve)=>{
        resolve(import('comps/dynamic_component/b.vue'));
      })
    }),
    defineAsyncComponent(()=> import('comps/dynamic_component/c.vue'))
  ])
  const changeli = function(index){
    if(index != data.actived){
      data.actived = index;
    }
  }
  export default {
    name: 'dynamic_component',
    components : {myD,myF},
    setup(){
      //获取挂载全局的属性
      const {proxy} = getCurrentInstance();
      console.log(proxy.$userInfo);
      // 通过inject属性获取挂载数据
      const testUserInfo = inject('$testUserInfo');
      console.log(testUserInfo);
      //修改数据，其他组件可以获取到最新数据
      testUserInfo.testId += 1;

      return {...toRefs(data),comps,changeli};
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