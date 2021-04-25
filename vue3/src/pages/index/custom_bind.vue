<template>
  <div class="main">
    <h1>使用自定义元素标题</h1>
    <section v-highlight="lightColor">使用自定属性的元素节点{{count}}</section>
    <ul class="ul-list" v-touch="onTouch"></ul>
  </div>
</template>

<script>
  import {reactive,toRefs} from 'vue';
  export default {
    name: 'customBind',
    directives : {
      highlight : {
        // 初始化
        mounted(el,binding,vnode, prevVnode){
          el.style.background = binding.value
        },
        // 更新前
        beforeUpdate(el){
          el.style.background = '#fff';
        },
        //更新后
        updated(el,binding){
          el.style.background = binding.value;
        }
      }
    },
    setup(){
      let timer = null;
      const data = reactive({
        colors : ['red','yellow','blue','orange','green','pink'],
        count : 0,
        lightColor : '' 
      })

      // 获取随机颜色
      const getColor = function(colors){
        let lang = colors.length ;
        let index = parseInt(Math.random() * lang);
        return colors[index];
      }

      const onTouch = function(e){
        console.log(e)
      }

      data.lightColor = getColor(data.colors);

      timer = setInterval(()=>{
        data.count++;
        data.lightColor = getColor(data.colors);
        console.log(data.lightColor);
        if(data.count > 3){
          clearInterval(timer);
          timer = null;
        }
      },1000)

      return {...toRefs(data),onTouch};
    }
  }
</script>

<style lang="scss" scoped>
  .ul-list{
    width: 100%;
    min-height: 120px;
  }
</style>