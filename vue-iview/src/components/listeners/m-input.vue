<template>
  <div class="m-input">
    <label for="mInput" @click.self="lableClick">
      被包裹的文本框
      <input type="text" name="被包裹的文本框" id="mInput" v-on="inputEvent" />
    </label>
    <div>
      <br/>
      <textarea name="没有被包裹的多行文本框"  cols="30" rows="10" v-on="textareaEvent"></textarea>
    </div>
    
  </div>
</template>
 
<script>
  export default {
    name: 'mInput',
    props:{},
    components: {},
    data(){
      return{
        labelEvent : {},
        inputEvent : {},
        textareaEvent : {}
      }
    },
    created(){
      // console.log(Object.keys(this.$listeners))
      this.initEvent();
    },
    mounted(){
      
    },
    computed:{
    },
    methods:{
      lableClick(){},
      focus(){},
      blur(){},
      //初始化事件，把点击事件给label，文本事件给input
      initEvent(){
        let self = this;
        let listeners = this.$listeners;
        console.log(this.$listeners)
        for(let key in listeners){
          switch(key){
            case 'click':
              self.lableClick = listeners[key];
              break;
            case 'focusText':
              self.textareaEvent.focus = listeners[key];
              break;
            default:
              self.inputEvent[key] = listeners[key];
              break;
          }
        }
      }
    },
    watch:{},
    filters:{}
  }
</script>
 
<style></style>
 