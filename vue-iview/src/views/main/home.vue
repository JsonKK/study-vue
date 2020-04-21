<template>
    <div class="box">
        <div class="child">1</div>
        <div class="child">zi</div>
    </div>
</template>
<script>
    var that;
    export default {
        props: {},
        components: {},
        data(){
            return {
            }
        },
        mounted(){
            this.initYkt();
        },
        methods : {
            initYkt(){
                function* YKT(){
                    yield '盐';
                    yield '课';
                    yield '堂';
                }
                let ykt = YKT();
            }
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