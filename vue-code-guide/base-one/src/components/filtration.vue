<template>
    <div id="">
        {{'abc1321' | uppercase('trest')}}
        <input type="text" v-model="msg"/>
    </div>
</template>
 
<script>
    export default {
        name: '',
        props:{},
        components: {},
        data(){
            return {
                msg : ''
            }
        },
        mounted(){},
        computed:{},
        methods:{},
        watch:{},
        filters:{
            uppercase : function(val,val2){
                if(!val) return '';
                return val.toUpperCase();
            }
        }
        
    }
</script>
 
<style></style>
 