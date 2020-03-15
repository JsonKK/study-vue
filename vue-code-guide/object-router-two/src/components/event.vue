<template>
    <div id="">
        <h4 ref="msg" :other="otherInfo">{{msg}}</h4>
    </div>
</template>
 
<script>
    export default {
        name: 'event',
        props:{},
        components: {},
        data(){
            return {
                otherInfo : ' world',
                msg : 'Hello',
                color : ''
            }
        },
        mounted(){
            let msg = this.$refs.msg.getAttribute('other');
            if(msg){
                this.msg = this.msg + msg;
            }
            // this.$refs.msg.style.color = 'red';
        },
        computed:{},
        methods:{
            changeColor(){
                let max = 16777215,
                    {color : colorNum} = this,
                    color;
                colorNum = Number(colorNum);
                if(colorNum >= 0 && colorNum<max){
                    colorNum += 1000;
                }
                else{
                    colorNum = 0;
                }
                color = colorNum.toString(16);
                let zeroNumLang = 6-color.length,zeroStr='';
                for(let i=0;i<zeroNumLang;i++){
                    zeroStr += '0';
                }
                this.$refs.msg.style.color = '#'+zeroStr+color;
                this.color = colorNum;
                console.info(zeroStr+color);
            }
        },
        watch:{},
        filters:{}
    }
</script>
 
<style></style>
 