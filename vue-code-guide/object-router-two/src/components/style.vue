<template>
    <div id="">
        <div class="static" v-bind:class="{'didi-orange didi-manage' : isrange}">新增的样式学习</div>
        <div class="static" v-bind:class="ddfe">新增的样式学习2</div>
        <div class="static" v-bind:class="ddfe2">新增的样式学习,可以计算</div>
        <div class="static" v-bind:style="{fontSize:fontsize+'px',color:didiColor}">内联style语法</div>
        <div class="static" v-bind:style="ddStyle">内联style语法可以计算</div>
    </div>
</template>
 
<script>
    export default {
        name: 'style1',
        props:{},
        components: {},
        data(){
            return {
                isrange : true,
                ddfe : {
                    'didi-orange' : true,
                    'didi-green' : false
                },
                didiAge : 4,
                didiMeber : 1000,
                didiColor : 'orange',
                fontsize : '30'
            }
        },
        mounted(){},
        computed:{
            ddfe2 : function(){
                return {
                    'didi-orange' : this.didiAge>3 ? true : false,
                    'didi-large' : this.didiMeber > 999 ? true : false
                }
            },
            ddStyle : function(){
                return {
                    color : this.didiAge > 3 ? 'orange' : 'blue',
                    fontsize : this.didiMeber > 999 ? '20px' : '30px'
                 }
            }
        },
        methods:{},
        watch:{},
        filters:{}
    }
</script>
 
<style></style>
 