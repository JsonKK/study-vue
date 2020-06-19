<template>
  <div class="m-input">
    <i-input :value="value" @on-change="changeInput" element-id="input"></i-input>
  </div>
</template>
 
<script>
  export default {
    name: 'mInput',
    model:{
      prop : 'value',
      event : 'change'
    },
    props:{
      value : String
    },
    components: {},
    data(){
      return{}
    },
    mounted(){
      console.log(this.$listeners)
    },
    methods:{
      changeInput(){
        let value = document.getElementById('input').value;
        this.$emit('change',value);
      }
    },
    watch:{
      // outValue : {
      //   handler : function(val){
      //     this.value = val;
      //   },
      //   immediate : true
      // }
    }
  }
</script>
 
<style lang="less" scope>
.m-input{
  width: 30%;
}
</style>
 