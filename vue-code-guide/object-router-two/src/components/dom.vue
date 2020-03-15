<template>
  <div id="dom">
    <backBtn></backBtn>
    <div id="test">测试的盒子</div>
    <p>{{msg}}</p>
    <slot></slot>
  </div>
</template>
 
<script>
import backBtn from './backBtn'
export default {
  name: "dom",
  props: {},
  components: {
    backBtn
  },
  data() {
    return {
        msg : '测试的文案'
    };
  },
  mounted() {
    let r = this.$el.children[1];
    document.getElementById("dom").appendChild(r);
    let his = this.$route;
    // this.$emit("welcome");
  },
  computed: {},
  methods: {
    sayHi: function() {
      alert("Hi child");
    }
  },
  watch: {},
  filters: {}
};
</script>
 
<style></style>
 