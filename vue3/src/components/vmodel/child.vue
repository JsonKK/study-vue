<template>
  <section class="first-name">
    <input type="text" :value="lastName" @input="vmodel('update:lastName',$event.target.value)" />
    <button @click="clearLastName">清除</button>
  </section>
  <br/>
  <section class="first-name">
    <input type="text" :value="firstName" @input="vmodel('update:firstName',$event.target.value)" />
    <button @click="clearFirstName">清除</button>
  </section>
</template>

<script>

  export default {
    props : {
      lastName : {
        type : String
      },
      firstName : {
        type : String
      }
    },
    emits : ['update:lastName','update:firstName'],
    setup(props,context){
      //提交vmodel
      const vmodel = function(method,data){
        context.emit(method,data);
      }

      //保留初始化值
      const lastName = props.lastName;
      const firstName = props.firstName;
      //清除
      const clearLastName = function(){
        vmodel('update:lastName',lastName);
      }
      const clearFirstName = function(){
        vmodel('update:firstName',firstName);
      }
      return {vmodel,clearLastName,clearFirstName};
    }
  }
</script>

<style lang="scss" scoped>
  section{
    padding: 10px;
    background: #ddd;
    input{
      border: 1px solid #888;
      padding: 0 4px;
    }
    button{
      padding: 0 10px;
      margin-left: 20px;
    }
  }
</style>