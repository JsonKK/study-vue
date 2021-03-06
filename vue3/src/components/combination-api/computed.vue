<template>
  <section class="computed">
    <h1>computed - 计算属性</h1>
    <p>{{username}}</p>
    <p>firstName: <input v-model.trim="user.firstName" /></p>
    <br/>
    <p>lastname: <input v-model="user.lastName" /></p>
  </section>
</template>

<script>
import { reactive, computed } from "vue";
export default {
  name : 'computed',
  setup(){
    //定义data数据
    const user = reactive({firstName : "kobe",lastName : "bryant"});
    // const username = computed(() => user.firstName + " " + user.lastName);
    //设置getter 和setter
    //单独修改firstName或者lastName不会触发 computed的set方法
    const username = computed({
      get(){
        return user.firstName + ' ' + user.lastName
      },
      set(value){
        const [firstName, lastName] = value.trim().split(" ");
        user.firstName = firstName;
        user.lastName = lastName;
      }
    })
    //对user设置值则会触发computed的set方法
    username.value = "hello world"; 
    return { user, username };
  }
}
</script>