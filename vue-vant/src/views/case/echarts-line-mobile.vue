<template>
  <div class="content">
    <section class="main" ref="main"></section>
  </div>
</template>
 
<script>
  import * as echarts from 'echarts';

  export default {
    name: 'echarts-line-mobile',
    props:{},
    components: {},
    data(){
      return{

      }
    },
    mounted(){
      this.initCharts();
    },
    computed:{},
    methods:{
      initCharts(){
        let myChart = echarts.init(this.$refs.main);
        // 绘制图表
        myChart.setOption({
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            xAxis: {
                data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }],
            dataZoom: [
              // {
              //   show: true,
              //   realtime: true,
              //   start: 0,
              //   end: 5
              // },
              {
                type: 'inside',
                realtime: true,
                //只能平移不能缩放
                zoomLock : true,
                // 限制展示的列
                //开始展示的列索引 0开始
                startValue : 1,
                //结束展示的列索引 与开始想减则显示的列数
                endValue  : 4
              }
            ]
        });

      }
    }
  }
</script>
 
<style lang="less" scoped>
  .main{
    width: 100%;
    height: 600px;
  }
</style>
 