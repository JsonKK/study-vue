<template>
  <div id="api-tree-charts">进来了</div>
</template>
 
<script>
  import * as echarts from 'echarts';
  // 导入测试数据
  import {data,data2} from './echarts-multipletrees-test-data.js';
  let myChart;
  export default {
    name: 'pluyin-highcharts-networkgraph',
    props:{},
    components: {},
    data(){
      return{}
    },
    mounted(){
      myChart = echarts.init(document.getElementById('api-tree-charts'));
      this.initChart();
    },
    computed:{},
    methods:{
      resizeCanvas(count){
        let height
        if(count > 0){
          height = count * 50 ;
        }
        let canvas = document.getElementById('api-tree-charts');
        canvas.style.height = height + 'px';
        myChart.resize({
          height : height
        });
      },
      // 初始化数据图
      initChart(){
        let renderData2 = this.disposeChartData(data2);
        this.renderChart(renderData2);
        myChart.on('click',(params)=>{
          let {data} = params;
          this.renderChart(data);
        })
        
      },
      //渲染层级树
      renderChart(chartData){
        this.resizeCanvas(11);
        myChart.showLoading();
        myChart.clear();
        myChart.hideLoading();
        myChart.setOption( {
            tooltip: {
              trigger: 'item',
              triggerOn: 'mousemove',
              formatter(params,ticked,callBack){
                const {data} = params;
                const {levelList} = data;
                let str = '';
                levelList.forEach((o,i)=>{
                  str += `第${i+1}级api：${o}<br/>`;
                });
                return str;
              }
            },
            legend: {
              show : false,
              top: '2%',
              left: '3%',
              orient: 'vertical',
              data: [{
                  name: 'tree1',
                  icon: 'rectangle'
              },
              {
                  name: 'tree2',
                  icon: 'rectangle'
              }],
              borderColor: '#c23531'
            },
            series:[
              {
                type: 'tree',
                name: 'tree2',
                data: [chartData],

                top: '2%',
                left: '140px',
                bottom: '2%',
                right: '214px',

                symbolSize: 10,

                label: {
                    position: 'left',
                    verticalAlign: 'middle',
                    align: 'right'
                },

                leaves: {
                    label: {
                        position: 'right',
                        verticalAlign: 'middle',
                        align: 'left'
                    }
                },

                expandAndCollapse: false,
                initialTreeDepth : -1,
                animationDuration: 550,
                animationDurationUpdate: 750
              }
            ]
        },true);
      },
      // 处理结构渲染数据
      //增加简写名
      disposeChartData(data,pFullNameList){
        let self = this;
        let isRoot  = false;
        // 判断是否有全名，如果是点击后的渲染就不需要了
        if(!data.fullName){
          data.fullName = Object.assign({},data).name;
          data.name = self.backShortName(data.name);
        }
        // 如果没有层级列表
        if(!data.levelList){
          data.levelList = [];
          data.levelList.push(data.fullName);
        }
        if(pFullNameList){
          data.levelList = [...pFullNameList,data.fullName]
        }
        if(data.children && Array.isArray(data.children)){
          data.children.forEach((o,i)=>{
            self.disposeChartData(o,data.levelList);
          })
        }
        if(data.is_repeat){
          data.itemStyle = {
            borderColor:'green'
          }
        }
        return data;
      },
      // 处理名称字符串
      backShortName(str){
        if(!str){
          return str;
        }
        let index = str.lastIndexOf('/');
        if(index == -1){
          return str;
        }
        index = str.lastIndexOf('/',index-1);
        if(index == -1){
          return str;
        }
        return str.slice(index);
      }
    }
  }
</script>
 
<style scoped lang="less">
#api-tree-charts{
  width:100%;
  height: 80vh;
}
</style>
 