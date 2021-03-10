<template>
  <div v-for="(item, i) in list" :ref="setRef">
    {{ item }}
  </div>
</template>

<script>
  import { ref, reactive, onBeforeUpdate ,nextTick} from 'vue'

  export default {
    setup() {
      const list = reactive([1, 2, 3])
      const divs = ref([])

      // 确保在每次更新之前重置ref
      // onBeforeUpdate(() => {
      //   divs.value = []
      // })

      const setRef = (el) => {
        divs.value.push(el);
      };

      nextTick(() => {
        console.dir(divs.value[0].innerText);
      });

      return {
        list,
        divs,
        setRef
      }
    }
  }
</script>
