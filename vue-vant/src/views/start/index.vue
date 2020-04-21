<template>
    <div>
        <m-header></m-header>
        <div class="mui-content">
            <!-- 轮播图 -->
            <van-swipe class="my-swipe">
                <van-swipe-item v-for="(item,index) in bannerList" :key="index">
                    <img :src="item.picId" alt=""/>
                </van-swipe-item>
            </van-swipe>
            <!-- 分类 -->
            <div class="nav-list" v-if="classList.length > 0">
                <ul>
                    <li v-for="(item,index) in classList" :key="index">
                        <div class="pic-box">
                            <img :src="item.categoryIconUrl" alt="">
                        </div>
                        <span>{{item.name}}</span>
                    </li>
                    <li>
                        <div class="pic-box">
                            <img src="../../assets/images/link-img/nav-more.png" alt="">
                        </div>
                        <span>全部</span>
                    </li>
                </ul>
            </div>
            <!-- 新品首发 -->
            <div class="new-goods">
                <img src="../../assets/images/link-img/new-goods.jpg" alt="">
                <a class="btn js-jump">查看全部</a>
            </div>
            <!-- 推荐列表 -->
            <ul class="recommend-list">
                <li v-for="(item,index) in goodsList" :key="index">
                    <div class="pic-box">
                        <img :src="item.artCoverPic" alt="">
                    </div>
                    <div class="name">{{item.artName}}</div>
                    <div class="money">¥ {{item.artPriceStr}}</div>
                </li>
            </ul>
        </div>
        
    </div>
</template>
<script>
    import appAjax from '_utils/app-ajax';
    import mHeader from '_c/common/header.vue';
    import {Swipe, SwipeItem} from 'vant';
    let remote = {
        // 获取列表
        getList(data, callback){
            appAjax.postJson({
                service: "GET_POPULAR_MARKET_LIST",
                type: "POST",
                data: data,
                success: function(ret) {
                    callback && callback(ret)
                }
            });
        },
        //获取轮播图
        getBannerList(callback){
            appAjax.postJson({
                service: "GET_INDEX_MARKET_BANNER",
                type: "POST",
                data: {id : "892689319402594322"},
                success: function(ret) {
                    callback && callback(ret)
                }
            });
        },
        //获取分类列表
        getClassList(callback){
             appAjax.postJson({
                service: "GET_INDEX_CLASS_LIST",
                type: "POST",
                data: {},
                success: function(ret) {
                    callback && callback(ret)
                }
            });
        },
        //获新品列表
        getGoodsList(callback){
             appAjax.postJson({
                service: "GET_INDEX_NEW_GOODS_LIST",
                type: "POST",
                data: {},
                success: function(ret) {
                    callback && callback(ret)
                }
            });
        }
    };

    export default {
        name : 'start_index',
        props: {},
        components: {
            mHeader, [Swipe.name] : Swipe, [SwipeItem.name] : SwipeItem
        },
        data(){
            return {
                list : [],
                bannerList : [],
                classList : [],
                goodsList : []
            }
        },
        mounted(){
            this.getList();
            this._initFirstScreen();
        },
        methods : {
            getList(){
                remote.getList({},(res)=>{
                    this.list = res;
                })
            },
            //初始化首屏
            _initFirstScreen(){
                let banner = new Promise((resolve,reject)=>{
                    remote.getBannerList((data)=>{
                        resolve(data);
                    });
                });
                let classList = new Promise((resolve,reject)=>{
                    remote.getClassList((data)=>{
                        resolve(data);
                    });
                });
                let goodsList = new Promise((resolve,reject)=>{
                    remote.getGoodsList((data)=>{
                        resolve(data);
                    });
                });
                Promise.all([banner,classList,goodsList]).then((arr)=>{
                    this.bannerList = arr[0];
                    this.classList = arr[1];
                    this.goodsList = arr[2];
                    console.log(arr);
                });
            }
        },
        watch : {
        }
    }
</script>
<style lang="less" scoped>
.my-swipe{
    font-size: 0px;
    img{
        width: 100%;
    }
}

.nav-list{
    background-color: #fff;
    padding: 0 .75rem;
    padding-bottom: 1.25rem;
    ul li{
        margin-top: 1.5rem;
        display: inline-block;
        width: 25%;
        text-align: center;
        vertical-align: top;
        span{
            display: block;
            font-size: .75rem;
            color: #666;
            margin-top: .5rem;
        }
        .pic-box{
            display: inline-block;
            width: 3rem;
            height: 3rem;
            img{
                width: 100%;
                height: 100%;
                display: block;
            }
        }
    }
}

.new-goods{
    position: relative;
    overflow: hidden;
    >img{
        width: 100%;
        display: block;
    }
    @btnWidth:5.5625rem;
    .btn{
        height: 1.6875rem;
        line-height: 1.6875rem;
        font-size: .75rem;
        border-radius: 1.6875rem;
        background: #ede9e5;
        border: solid 1px #a67c52;
        color: #a67c52;
        text-align: center;
        width: @btnWidth;
        position: absolute;
        left: 50%;
        margin-left: -@btnWidth/2;
        bottom: 20%;
    }
    
}
// 方形
@square:1rem;
.new-goods:before{
    width: @square;
    height: @square;
    position: absolute;
    left: 50%;
    margin-left: -@square/2;
    bottom:-@square/2;
    background-color: #fff;
    content: '';
    transform: rotate(-45deg);
}

.recommend-list{
    @liWidth:7.5rem;
    @padding:.75rem;
    display: flex;
    flex-direction: row;
    background-color: #fff;
    overflow-x: auto;
    padding: @padding;
    li{
        width: @liWidth;
        margin-right: @padding;
        &:last-child{
            margin-right: 0rem;
        }
        .pic-box{
            width:  @liWidth;
            height:  @liWidth;
            border: solid 1px #e0e0e0;
            position: relative;
            img{
                width: 100%;
                height: 100%;
                position: absolute;
                object-fit: cover;
            }
        }
        .name{
            white-space: nowrap;
            word-break: break-word;
            text-overflow: ellipsis;
            overflow: hidden;
            margin-top: .5rem;
        }
        .money{
            color: #b00;
            max-width: 100%;
            white-space: nowrap;
            word-break: break-word;
            text-overflow: ellipsis;
            overflow: hidden;
        }
    }
}
</style>