<template>
  <div class="var-model">
    <div class="line-text">{{text}}</div>
    <br/>
    <!-- 监听原生事件 -->
    <m-input v-model="text" @focus="focusInput"></m-input>
    <br/>
    <i-button type="primary" @click="reset">重置</i-button>
  </div>
</template>
 
<script>
  import mInput from '@/components/var-model/m-input.vue';
  const initStr = '这个是一个会变的字符串';
  export default {
    name: 'varModel',
    components: {
      mInput
    },
    data(){
      return{
        text : initStr
      }
    },
    created(){
      
    },
    mounted(){
      
    },
    computed:{},
    methods:{
      reset(){
        this.text = initStr
      },
      focusInput(){
        console.log(2)
      }
    },
    watch:{}
  }
</script>
 
<style></style>
 