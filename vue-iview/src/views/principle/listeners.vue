<template>
  <div class="listeners">
    <p style="color:red;">目前无法解决事件冒泡的问题(子集有事件的采用事件修饰符定义事件)</p>
    <p> listeners事件不能在孙子组件上被识别到 </p>
    <!-- listeners事件不能在孙子组件上被识别到 -->
    <!-- <input-box @focus="focusInput" @blur="blurInput" @focusText="focusText" @click="labelClick"></input-box> -->
    <m-input @focus="focusInput" @blur="blurInput" @focusText="focusText" @click="labelClick"></m-input>
  </div>
</template>
 
<script>
  import inputBox from '@/components/listeners/input-box.vue';
  import mInput from '@/components/listeners/m-input.vue';
  export default {
    name: 'listeners',
    props:{},
    components: {inputBox,mInput},
    data(){
      return{}
    },
    mounted(){},
    computed:{},
    methods:{
      focusInput(){
        console.log('焦点在input')
      },
      blurInput(){
        console.log('焦点离开input')
      },
      focusText(){
        console.log('焦点在多行文本框')
      },
      labelClick(){
        console.log('label被点击了')
      }
    }
  }
</script>
 
<style></style>
 