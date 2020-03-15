<template>
    <p class="time ">{{remainTime}}s</p>
</template>
 
<script>
    export default {
        name: '',
        props:['time'],
        components: {},
        data(){
            return{
                remainTime : 0
            }
        },
        mounted(){
             this._countdown(this.time);
             //从子组件改变父组件内容
             this.$parent.countStep++;
        },
        computed:{},
        methods:{
            _countdown(time){
                if(time>0){
                    this.remainTime = time;
                    time--;
                    setTimeout((res)=>{this._countdown(time)},1000);
                }
                else{
                    this.remainTime = 0;
                }
            }
        },
        watch:{
            time:{
                handler(value){
                },
                immediate:true
            }
            
        },
        filters:{}
    }
</script>
 
<style></style>
 