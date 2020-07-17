<template>
  <div>
     <vue-tabslider
      :duration="300"
      :position="'top'"
      :title="titleData"
      :titleStyles="titleStyles"
      :activeStyle="activeStyle"
      :titleBoxStyles="titleBoxStyles"
        style="width:100vw;height:100vh;">
    <template>
      <div class="tab-slider" style="background:#fde1e1">
        first
      </div>
      <div class="tab-slider" style="background:#b2c0f1">
        second
      </div>
      <div class="tab-slider" style="background:#e6f5ea">
        third
      </div>
      <div class="tab-slider" style="background:#e6d3f5">
        four
      </div>
    </template>
  </vue-tabslider>
  </div>
</template>
 
<script>
  // 未实现的tab功能
  export default {
    name: 'vueTabslider',
    props:{},
    components: {
    },
    data(){
      return{
        // 标题数组
      title: [
        {
          name: '首页'
        },
        {
          name: '数据页'
        },
        {
          name: '我的'
        },
        {
          name: '更多'
        }
      ],
      // 标题样式属性
      titleStyles: {
        borderRight: '1px solid #333'
      },
      // 滑动页样式属性
      titleBoxStyles: {
        paddingLeft: '1px',
        background: '#FFFFFF',
        width: '100%'
      },
      // 标题激活样式属性
      activeStyle: {
        color: '#745fe4',
        fontSize: '30px'
      }
      }
    },
    mounted(){},
    computed:{},
    methods:{},
    watch:{}
  }
</script>
 
<style></style>
 