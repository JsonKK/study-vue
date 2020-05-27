<template>
    <div>
        <div class="box">
            <div class="child">1</div>
            <div class="child">zi</div>
        </div>
        <i-button type="primary" @click="confirm">显示确认框</i-button>
    </div>
</template>
<script>
    import VueConfirm from '../../components/comfirm';
    // import Vue from 'vue';
    // Vue.use(VueConfirm)
    var that;
    export default {
        props: {},
        components: {
            VueConfirm
        },
        data(){
            return {
            }
        },
        mounted(){
        },
        methods : {
            confirm () {
                var content = ` <div class="title">11111</div>`
                var vm=this
                const confirm = VueConfirm({
                title:'23232',
                text:content,
                dangerouslyUseHTMLString:true,
                button:[{
                        text: '确定',
                        ontap: function () {
                            confirm.close().then(function(res){
                            console.log(111233233231)
                        });
                        }},
                        {
                        text: '取消',
                        ontap: function () {
                        
                        confirm.close().then(function(res){
                            console.log('close')
                        });
                        }
                    }]
            
                });
            },
        },
        watch : {
        }
    }
</script>
<style lang="less" scoped>
    .box{
        width: 300px;
        height: 300px;
        background-color: blanchedalmond;
        // border-top: 1px solid oldlace;
        // margin-top: -1px;
        // overflow: hidden;
        
    }
    // .box:before{
    //     content: "";
    //     clear: both;
    //     display:table;

    // }
    .child:first-child{
        // border: 1px solid red;
        background-color: yellowgreen;
        width: 100px;
        height: 100px;
        margin-top: 2rem;
        display: inline-block;
    }
</style>