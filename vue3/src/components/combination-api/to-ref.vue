<template>
  <section class="to-ref">
    <h1>解构响应式数据对象</h1>
    <p>Username: {{username}}</p>
    <p>Age: {{age}}</p>
  </section>
</template>

<script>
import {reactive,toRefs} from 'vue';

export default {
  name : 'toRef',
  setup(){
    const data = reactive({username:'jsonKK',age:18});
    //如果传递的是普通对象，不是响应式对象，则会抛出警告
    //toRefs() expects a reactive object but received a plain one.
    return {...toRefs(data)};
  }
}
</script>