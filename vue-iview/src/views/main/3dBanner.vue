<template>
    <div ref="bannerBox">
        <InputNumber :max="50" :min="1" :value="cuts" @on-change="changeNum"></InputNumber>
        <div id="d-banner" 
            :style="`height:${bannerHeight}px;min-width:${bannerWidth}px;transform: perspective(${2*bannerHeight}px);`"
        >
            <ul>
                <!-- <li>
                    <div class="min-content">上</div>
                    <div class="min-content">下</div>
                    <div class="min-content">前</div>
                    <div class="min-content">后</div>
                    <div class="min-content">左</div>
                    <div class="min-content">右</div>
                </li> -->
                <li v-for="n in cuts" :key="n" 
                    :class="[`active-${activeIndex}`,{'animate':!noMove}]"
                    :style="{
                        'transition-delay':`${(n-1)*0.1}s`,
                        'height':`${bannerHeight}px`,
                        'width':`${bannerWidth/cuts}px`,
                        'z-index':`${n>cuts/2 ? cuts-n : 1}`,
                        'transform': `translateZ(${-bannerHeight/2}px) rotateX(${activeIndex*90}deg)`
                        }"
                >
                    <div class="min-content" v-for="min in 6"
                        :key="min"
                        :style="minContentStyle({n,min})"
                    >
                    </div>
                </li>
            </ul>
            <ol class="nav">
                <li v-for="(item,index) in bannerList" :key="index" class="item" 
                    :class="{active:index==activeIndex}"
                    @click="move(index)"
                >
                    {{index+1}}
                </li>
            </ol>
        </div>
        
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
            cuts : 10,
            bannerWidth : 950,
            activeIndex : 0,
            noMove : false,
            minContentStyle({n,min}){
                let {bannerWidth,cuts,bannerHeight} = this;
                let style =  `background-position: -${bannerWidth/cuts*n-bannerWidth/cuts}px  0;
                                height:${bannerHeight}px;width:${bannerWidth/cuts}px;background-size: ${bannerWidth}px auto;`;
                switch(min){
                    case 1 :
                        style += `
                        bottom: ${bannerHeight}px;
                        transform:translateZ(${bannerHeight/2}px) rotateX(90deg);
                        transform-origin: bottom;
                        `;
                        break;
                    case 2:
                        style += `
                        top: ${bannerHeight}px;
                        transform:translateZ(${bannerHeight/2}px) rotateX(-90deg);
                        transform-origin: top;
                        `;
                        break;
                    case 3:
                        style += `
                        transform: translateZ(${bannerHeight/2}px);
                        `;
                        break;
                    case 4:
                        style += `
                        transform: translateZ(-${bannerHeight/2}px) rotateX(-180deg);;
                        `;
                        break;
                    case 5:
                        style += `
                        width: ${bannerHeight}px;
                        right: 100%;
                        transform:translateZ(${bannerHeight/2}px) rotateY(-90deg);
                        transform-origin: right;
                        `;
                        break;
                    case 6:
                        style += `
                        width: ${bannerHeight}px;
                        left: 100%;
                        transform:translateZ(${bannerHeight/2}px) rotateY(90deg);
                        transform-origin: left;
                        `;
                        break;

                }
                return style;
            }
        }
    },
    mounted() { 
        window.onresize = this.resizeWidth;
        this.resizeWidth();
    },
    computed: {
        bannerHeight(){
            let {bannerWidth} = this;
            return bannerWidth / (1920/384);
        }
    },
    methods: {
        //旋转事件
        move(index){
            if(this.activeIndex != index){
                this.activeIndex = index;
            }
        },
        //修改片数
        changeNum(num){
            this.noMove = true;
            this.cuts = 0;
            this.$nextTick(()=>{
                this.cuts = num;
                setTimeout(()=>{
                    this.noMove = false;
                },5000);
            });
        },
        resizeWidth(e){
            let box = this.$refs.bannerBox;
            let c = Number(this.cuts);
            this.cuts = 0;
            this.bannerWidth = box.clientWidth;
            this.cuts = c;
        }
    },
    watch: {
    },
    filters: {}
}
</script>
 
<style lang="less" scoped>
    @height: 1050px / (1920px/384px);
    @width:1050px;
    @cuts : 10;
    #d-banner{
        // width: @width;
        margin:20px auto;
        // height:@height;
        perspective: 2*@height;
        // transform: perspective(2*@height);
        background-color: gainsboro;
        position: relative;
        // &:hover ul li {
        //     transform: translateZ(-@height/2) rotateX(180deg);
        // }
        ul{
            width: 100%;
            overflow:hidden;
        }
        ul li{
            // height: @height;
            // width: @width/@cuts;
            box-sizing: border-box;
            list-style: none;
            float: left;
            position: relative;
            transform-style: preserve-3d;
            // transform: translateZ(-@height/2);
            transition: 1s;
            // &.active-1{
            //     transform: translateZ(-@height/2) rotateX(90deg);
            // }
            // &.active-2{
            //     transform: translateZ(-@height/2) rotateX(180deg);
            // }
            // &.active-3{
            //     transform: translateZ(-@height/2) rotateX(270deg);
            // }
            // &.active-4{
            //     transform: translateZ(-@height/2) rotateX(360deg);
            // }
            // &:last-child{
            //     z-index: -1;
            // }
            // .mixin (@a) when (@a < @cuts/2 ) {
            //     z-index: @cuts*1-@a*1;
            // }
            .mixin2 (@a) when (@a >= @cuts/2 ) {
                z-index: @cuts*1-@a*1;
            }
            each(range(@cuts),{
                // @num = @value;
                &:nth-child(@{value}){
                    transition-delay: @value*1*0.02s;
                    // .mixin(@value);
                    // z-index: @cuts*1-@value*1;
                    // div.min-content{
                        
                    //     background-position: -(@width/@cuts *@value)+@width/@cuts  0;
                    // }
                }
            })
            div.min-content{
                // height: @height;
                // width: @width/@cuts;
                position:absolute;
                // border: 1px solid salmon;
                box-sizing: border-box;
                &:nth-child(1){
                    background-image: url('../../assets/images/banner/banner-index-1.jpg');
                }
                &:nth-child(2){
                    background-image: url('../../assets/images/banner/banner-index-2.jpg');
                }
                &:nth-child(3){
                    background-image: url('../../assets/images/banner/banner-policy-combine.jpg');
                }
                &:nth-child(4){
                    background-image: url('../../assets/images/banner/banner-public-service.jpg');
                }
            }
        }
    }
    .nav{
        position:absolute;
        right: 0;
        bottom: 0;
        z-index: 999;
        .item{
            width: 30px;
            height: 30px;
            border-radius: 100%;
            border: 1px solid purple;
            background-color: pink;
            text-align: center;
            line-height: 30px;
            font-size: 14px;
            color: aquamarine;
            display: inline-block;
            margin: 4px;
            cursor: pointer;
            &.active{
                background-color: blueviolet;
                color: #fff;
            }
        }
    }
</style>
 