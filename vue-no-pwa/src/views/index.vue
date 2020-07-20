<template>
    <div class="content">
        <back-btn :back-app="true"></back-btn>
        <section class="right-btn-box">
            <router-link :to="{name:'rule'}">
              <div class="link-rule"></div>
            </router-link>
            <router-link :to="{path:'/muesum-list',query}" v-if="isLogin">
              <div class="link-muesum"></div>
            </router-link>
        </section>
        <section class="header-info">
            <img src="../assets/img/index-header-bg.png" alt />
        </section>
        <section class="main">
            <!-- 兑换中心 -->
            <div class="exchange-center">
                <ul class="self-exchange-info">
                    <li>小喇叭:{{toolsInfo.lb_prop || 0}}</li>
                    <li>红名卡:{{toolsInfo.hmk_prop || 0}}</li>
                    <li class="love-icon">恋爱币:{{toolsInfo.lab_prop || 0}}</li>
                </ul>
                <div class="exchange-center-bg">
                    <ul class="exchange-list">
                        <li class="exchange-item" v-for="(item,index) in exchangeList" :key="index">
                            <div class="exchange-item-header">
                                <img :src="`${forumimg_host+item.icon}`" alt />
                            </div>
                            <div class="exchange-item-item">
                                <p>{{item.name}}</p>
                                <p class="des">{{item.desc}}</p>
                            </div>
                            <div class="exchange-btn" :class="{disabled:item.change_status!=1}" @click="exchangeGift(item)"></div>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- 榜单列表 -->
            <ul :class="['rank-tap','rank-tap-'+rankTap]">
                <li v-for="index in 2" :key="index" @click="changeTap(index)"></li>
            </ul>

            <dl class="rank-box">
                <dt class="rank-title">
                    <div>排名</div>
                    <div>昵称</div>
                    <div>恋爱值</div>
                </dt>
                <rank-list :list="rankList" :tap-index="rankTap"></rank-list>
            </dl>
        </section>
        <!-- 底部个人信息 -->
        <fixed-self :user-info="userInfo" :tap-index="rankTap"></fixed-self>
    </div>
</template>
 
<script>
import backBtn from '../components/back-btn.vue';
import rankList from '../components/rank-list.vue';
import fixedSelf from '../components/fixed-self.vue';
import utils from '../utils/utils.js';
let that;
const hbUtils = window.HBUtils;
export default {
    name: 'index',
    components: {
        // eslint-disable-next-line vue/no-unused-components
        backBtn,rankList,fixedSelf
    },
    data() {
        that = this;
        return {
            forumimg_host : hbUtils.imgHost.forumimg_host,
            id: hbUtils.getUrlParam('active_id') || '',
            ticket_id : '',
            current_uuid : hbUtils.getUrlParam('host_uuid') || '',
            //道具信息
            toolsInfo : {},
            //榜单加载开关
            rankLoading : false,
            //榜单列表
            rankList : [],
            //主播信息
            userInfo : {},
            //榜单页签
            rankTap : 1,
            //兑换加载
            exchangeLoading : false,
            //兑换列表
            exchangeList : [],
            //是否初始化
            isInit : true,
            //是否登录
            isLogin : false,
            query : that.$route.query

        }
    },
    mounted() { 
        this.isInit = false;
        //校验是否登录
        utils.isLogin(true).then(()=>{
            this.isLogin = true;
        });
        utils.getUserInfo().then(()=>{
            that.getExchangeInfo();
        });
        this.getRankList();
    },
    computed: {},
    methods: {
        // type 1为取 2为存
        disposeCatch(type){
            if(type == 1){
                let list = localStorage.getItem('loveList');
                if(list){
                    this.rankList = JSON.parse(list);
                }
            }
            else{
                localStorage.setItem('loveList',JSON.stringify(that.rankList));
            }
        },
        //兑换礼物
        exchangeGift(item){
            utils.isLogin().then(()=>{
                let {exchangeLoading,ticket_id} = this;
                let {change_group_id:group_id} = item;
                if(!item || item.change_status != 1 || exchangeLoading || !group_id){
                    return;
                }
                
                that.$api.get('postExchange',{group_id,ticket_id},(err,res)=>{
                    that.exchangeLoading = false;
                    if(err){
                        // eslint-disable-next-line no-undef
                        HBUtils.callHandler('makeToast', err.message);
                    }
                    else{
                        let data = that.normalBackData(res);
                        let message;
                        let {response_status} = res;
                        //兑换成功
                        if(response_status === 'success'){
                            message = data.content || '兑换成功';
                            that.getExchangeInfo();
                        }
                        //登录过期
                        else if(response_status === 'ticket_expire'){
                            utils.toLogin();
                        }
                        //兑换失败
                        else{
                            message = res.msg;
                        }
                        hbUtils.callHandler('makeToast', message);
                    }
                });
            });
        },
        //切换页签
        changeTap(index){
            if(that.rankLoading || !index || index == that.rankTap){
                return;
            }
            that.getRankList(index).then(()=>{
                that.rankTap = index;
            })
        },
        //获取兑换列表和道具信息
        getExchangeInfo(){
            let {ticket_id} = this;
            //获取兑换列表
            // 暂时先用1进行测试，上线要改为4
            that.$api.get('getExchangeList',{type:4,page:1,ticket_id},(err,res)=>{
                if(err){
                    // eslint-disable-next-line no-undef
                    HBUtils.callHandler('makeToast', err.message);
                }
                else{
                    let data = that.normalBackData(res);
                    if(!Array.isArray(data)){
                        return;
                    }
                    that.exchangeList = data;
                }
            });
            //获取道具信息
            that.$api.get('getToolsInfo',{ticket_id},(err,res)=>{
                if(err){
                    // eslint-disable-next-line no-undef
                    HBUtils.callHandler('makeToast', err.message);
                }
                else{
                    that.toolsInfo = that.normalBackData(res) || {};
                }
            });
        },
        //获取榜单列表
        getRankList(section=1){
            let {current_uuid,id,ticket_id} = this;
            if(!id){
                return
            }
            this.rankLoading = true;
            let promise = new Promise((resolve,reject)=>{
                let url,sendData;
                //主播榜处理
                if(section == 1){
                    url = 'getLiveRanking';
                    sendData = {current_uuid,id};
                }
                //富豪榜处理
                else{
                    url = 'getMoneyRanking';
                    sendData = {ticket_id,id};
                }
                that.$api.getTrade(url,sendData,(err,res)=>{
                    that.rankLoading = false;
                    if(err){
                         // eslint-disable-next-line no-undef
                        HBUtils.callHandler('makeToast', err.message);
                        reject();
                    }
                    else{
                        let data = that.normalBackData(res) || {};
                        let {info={},list=[]} = data;
                        // 后台info和list为空时候，会传null
                        if(!info){
                            info = {}
                        }
                        if(!list){
                            list = [];
                        }
                        info.disposeValue = that.disposeTenTousand(info.value);
                        info.rankStr = (info.rank && info.rank + '') || '';
                        list.map((item)=>{
                            item.disposeValue = that.disposeTenTousand(item.value);
                        });
                        that.userInfo = info;
                        that.rankList = list;
                        resolve(data);
                    }
                })
            });
            return promise;
        },
        //通用返回数据
        normalBackData(res){
            return (res && res.info && res.info.data) || ''
        },
        // 万转换
        // 超过4位时，使用w显示，保留小数点后一位
        disposeTenTousand(value){
            value = value > 0 ? (value.toString()) : value;
            if(!value || value.length < 5){
                return value;
            }
            let newValue = value.slice(0,value.length-3);
            return newValue.slice(0,newValue.length-1) + '.' + newValue[newValue.length-1] + 'w';
        }
    },
    watch: {
        $route() {
            let {isInit} = this;
            if(!isInit){
                this.getExchangeInfo();
            }
        }
    }
}
</script>
 
<style src="../assets/css/reset.css"></style>
<style src="../assets/css/index.scss" lang="scss" scoped></style>
 