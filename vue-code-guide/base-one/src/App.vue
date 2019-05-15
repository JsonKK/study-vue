<template>
  <div id="app">
    <!-- <span>{{text}}</span> -->
    <!-- <img src="./assets/logo.png"> -->
    <!-- <expression :child-text.sync="text"></expression> -->
    <!-- <event></event> -->
    <!-- <computed></computed> -->
    <!-- <formText></formText> -->
    <!-- <filtration></filtration> -->
    <!-- <style1></style1> -->
    <!-- <transition></transition> -->
    <!-- <dom v-on:welcome="sayHi" ref="child"><p>父组件通过slot写入的文案</p></dom> -->
    <!-- <charts :datasets="chartData.datasets" :labels="chartData.labels" :width="chartData.width" :height="chartData.height" :responsive="false"></charts> -->
    
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import expression from './components/expression'
import event from './components/event'
import computed from './components/computed'
import formText from './components/formText'
import filtration from './components/filtration'
import style1 from './components/style'
import transition from './components/transition'
import dom from './components/dom'
import charts from './components/charts'
export default {
  name: 'App',
  components: {
    HelloWorld,
    expression,
    event,
    computed,
    formText,
    filtration,
    style1,
    transition,
    dom,
    charts
  },
  data(){
    return {
      text: '测试文本响应',
      chartData:{
        width : 500,
        height : 200,
        labels : ['1月','2月','3月','4月','5月','6月'],
        datasets : [
          {
            label : '数据1',
            data : [110,90,100,81,106,75,88]
          },
          {
            label : '数据2',
            data : [100,80,90,71,96,65,78]
          },
          {
            label : '数据3',
            data : [90,70,80,61,86,55,68]
          },
          {
            label : '数据4',
            data : [80,60,70,51,76,45,58]
          },
          {
            label : '数据5',
            data : [70,50,60,41,66,35,48]
          },
          {
            label : '数据6',
            data : [60,40,50,31,56,25,38]
          },
          {
            label : '数据1',
            data : [50,30,40,21,46,15,28]
          },
        ]
      }
    }
  },
  mounted(){
    // this.$on('welcome',function(res){
    //   let t = res;
    // });
    // this.$refs.child.$data.msg = '父组件传进来的参数';
  },
  methods:{
    sayHi: function () {
      alert('Hi!')
    }
  },
  watch:{
    text : {
      handler : function(val,oldval){
        let v = val;
      },
      deep:true
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
