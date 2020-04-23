<template>
    <div id="d-banner">
        <ul>
            <!-- <li>
                <div class="min-content">上</div>
                <div class="min-content">下</div>
                <div class="min-content">前</div>
                <div class="min-content">后</div>
                <div class="min-content">左</div>
                <div class="min-content">右</div>
            </li> -->
            <li v-for="n in cuts" :key="n">
                <div class="min-content" v-for="min in 6" :key="min"></div>
            </li>
        </ul>
    </div>
</template>
 
<script>
export default {
    name: 'main3dBanner',
    props: {},
    components: {},
    data() {
        return {
            bannerList : [
                '../../assets/images/banner/banner-index-1.jpg',
                '../../assets/images/banner/banner-index-2.jpg',
                '../../assets/images/banner/banner-policy-combine.jpg',
                '../../assets/images/banner/banner-public-service.jpg',
            ],
            cuts : 10
        }
    },
    mounted() { },
    computed: {},
    methods: {},
    watch: {},
    filters: {}
}
</script>
 
<style lang="less" scoped>
    @height: 1050px / (1920px/384px);
    @width:1050px;
    @cuts : 10;
    #d-banner{
        width: @width;
        margin:20px auto;
        // overflow: hidden;
        height:@height;
        perspective: 2*@height;
        background-color: gainsboro;
        &:hover ul li {
            transform: translateZ(-@height/2) rotateX(180deg);
        }
        ul{
            width: 100%;
            overflow:hidden;
        }
        ul li{
            height: @height;
            width: @width/@cuts;
            box-sizing: border-box;
            list-style: none;
            float: left;
            position: relative;
            transform-style: preserve-3d;
            transform: translateZ(-@height/2);
            transition: .5s;
            // &:last-child{
            //     z-index: -1;
            // }
            .mixin (@a) when (@a < @cuts/2 ) {
                z-index: 5;
            }
            .mixin2 (@a) when (@a >= @cuts/2 ) {
                z-index: 1;
            }
            each(range(@cuts),{
                // @num = @value;
                &:nth-child(@{value}){
                    transition-delay: @value*1*0.2s;
                    .mixin(@value);
                    .mixin2(@value);
                    div.min-content{
                        background-position: -(@width/@cuts *@value)+@width/@cuts  0;
                    }
                }
            })
            div.min-content{
                height: 100%;
                width: 100%;
                position:absolute;
                border: 1px solid salmon;
                box-sizing: border-box;
                background-size: @width auto;
                &:nth-child(1){
                    bottom: @height;
                    transform:translateZ(@height/2) rotateX(90deg);
                    transform-origin: bottom;
                    background-image: url('../../assets/images/banner/banner-index-1.jpg');
                }
                &:nth-child(2){
                    top: @height;
                    transform:translateZ(@height/2) rotateX(-90deg);
                    transform-origin: top;
                    background-image: url('../../assets/images/banner/banner-index-2.jpg');
                }
                &:nth-child(3){
                    transform: translateZ(@height/2);
                     background-image: url('../../assets/images/banner/banner-policy-combine.jpg');
                }
                &:nth-child(4){
                    transform: translateZ(-@height/2);
                    background-image: url('../../assets/images/banner/banner-public-service.jpg');
                }
                &:nth-child(5){
                    width: @height;
                    right: 100%;
                    transform:translateZ(@height/2) rotateY(-90deg);
                    transform-origin: right;
                   
                }
                &:nth-child(6){
                    width: @height;
                    left: 100%;
                    transform:translateZ(@height/2) rotateY(90deg);
                    transform-origin: left;
                    
                }
            }
        }
    }
</style>
 