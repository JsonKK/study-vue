<template>
    <div id="box">
        <canvas :class="['vchart',chartType+'-chart']" :width="width" :height="height" ref="chartCanvas"></canvas>
    </div>
</template>
 
<script>
    import chart from 'chart.js'
    export default {
        name: '',
        props:{
            chartType: {
                type : String,
                default : 'line'
            },
            width : {
                type : Number,
                default : 300
            },
            height : {
                type : Number,
                default : 300
            },
            labels : {
                type : Array,
                validator(value){
                    return value.every(label => typeof label === 'string');
                },
                default(){
                    return []
                }
            },
            datasets:{
                type : Array,
                validator(value){
                    return value.every(series => {
                        return Array.isArray(series.data) && series.data.every(val => {
                            return typeof val === 'number'
                        });
                    });
                },
                default(){
                    return []
                }
            },
            options:{
                type : Object,
                default(){
                    return {};
                }
            },
            responsive:{
                type : Boolean,
                default : null
            },

        },
        components: {},
        data(){
            return {
                chartInstance : null
            }
        },
        mounted(){
            const chartCanvas = this.$refs.chartCanvas;
            const ctx = chartCanvas.getContext('2d');
            this.chartInstance = new chart(ctx,{
                type : this.chartType,
                data : this.chartData,
                options : this.chartOptions
            });
        },
        computed:{
            chartData(){
                return {
                    labels : this.labels,
                    datasets : this.datasets
                }
            },
            chartOptions(){
                let options = {};
                options = this.parseCommonOptions(options);
                return Object.assign(this.options,options);
            }
        },
        methods:{
            parseCommonOptions(options){
                if(this.responsive !== null){
                    options.responsive = this.responsive;
                }
                return options;
            }
        },
        watch:{
            datasets:{
                handler(val,oldVal){
                    this.chartInstance.data.datasets = val;
                    this.chartInstance.update();
                }
            }
        },
        filters:{}
    }
</script>
 
<style scoped>
#box>canvas{
    margin: 0 auto;
}
</style>
 