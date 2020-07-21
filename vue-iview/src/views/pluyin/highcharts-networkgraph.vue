<template>
  <div id="container"></div>
</template>
 
<script>
  import Highcharts from 'highcharts/highstock';
  import exporting from 'highcharts/modules/exporting';
  import oldie from 'highcharts/modules/oldie';
  import networkgraph from 'highcharts/modules/networkgraph';

  exporting(Highcharts);
  oldie(Highcharts);
  networkgraph(Highcharts);
  export default {
    name: 'highcharts-networkgraph',
    props:{},
    components: {},
    data(){
      return{
        chartData : [
          [{ 
              "name": "trade_system/2/service/AaService.php/ccc",
              "is_root": true,
              "is_repeat": false
          }, {
              "name": "trade_system/2/service/AaService.php/c1",
              "is_root": false,
              "is_repeat": false
          }],
          [{
              "name": "trade_system/2/service/AaService.php/ccc",
              "is_root": false,
              "is_repeat": false
          }, {
              "name": "trade_system/2/service/AaService.php/c3",
              "is_root": false,
              "is_repeat": false
          }],
          [{
              "name": "trade_system/2/service/AaService.php/c2",
              "is_root": false,
              "is_repeat": false
          }, {
              "name": "trade_system/2/service/AaService.php/ccc",
              "is_root": false,
              "is_repeat": true
          }],
          [{
              "name": "trade_system/2/service/AaService.php/c1",
              "is_root": false,
              "is_repeat": false
          }, {
              "name": "trade_system/2/service/AaService.php/c2",
              "is_root": false,
              "is_repeat": false
          }]
        ]
      }
    },
    mounted(){
      this.initCharts();
    },
    methods : {
      initCharts(){
        let {renderData} = this;
        Highcharts.addEvent(
          Highcharts.seriesTypes.networkgraph,
          'afterSetOptions',
          function (e) {
            var colors = Highcharts.getOptions().colors,
              i = 0,
              nodes = {};
            e.options.data.forEach(function (link) {
              // console.log(link)
              if (link[3]) {
                nodes[link[0]] = {
                  id: link[0],
                  marker: {
                    radius: 20
                  },
                  color : 'red',
                  toolName : link[2]
                };
              } 
              else if(link[4]){
                nodes[link[0]] = {
                  id: link[0],
                  color: 'green',
                  toolName : link[2]
                };
              }
              else if(link[0] && !nodes[link[0]]){
                nodes[link[0]] = {
                  id: link[0],
                  color: 'black',
                  toolName : link[2]
                };
              }
              else if(link[1] && !nodes[link[1]]){
                nodes[link[1]] = {
                  id: link[1],
                  color: 'black',
                  toolName : link[2]
                };
              }
            });
            e.options.nodes = Object.keys(nodes).map(function (id) {
              return nodes[id];
            });
          }
        );
        Highcharts.chart('container', {
          chart: {
            type: 'networkgraph',
            height: '100%'
          },
          title: {
            text: 'The Indo-European Laungauge Tree'
          },
          subtitle: {
            text: 'A Force-Directed Network Graph in Highcharts'
          },
          tooltip:{
            formatter(){
              let {point} = this;
              console.log(this)
              return point.toolName || '';
            }
          },
          plotOptions: {
            networkgraph: {
              keys: ['from', 'to','name','is_root','is_repeat'],
              layoutAlgorithm: {
                enableSimulation: true
              }
            }
          },
          series: [{
            dataLabels: {
              enabled: true,
            },
            data: renderData
          }]
        });
      },
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
    },
    computed:{
      renderData(){
        let self = this;
        let {chartData} = this;
        let mainArray = [];
        if(!Array.isArray(chartData)){
          return mainArray;
        }
        let arr;
        for(let i = 0;i<chartData.length;i++){
          if(chartData[i].length == 2){
            arr = [];
            arr.push(self.backShortName(chartData[i][0].name));
            arr.push(self.backShortName(chartData[i][1].name));
            arr.push(chartData[i][0].name);
            arr.push(chartData[i][0].is_root);
            arr.push(chartData[i][1].is_repeat);
            mainArray.push(arr);
          }
        }
        return mainArray;
      },
    }
  }
</script>
 
<style scoped lang="less">
#container {
	min-width: 320px;
	max-width: 800px;
	margin: 0 auto;
}
</style>
 