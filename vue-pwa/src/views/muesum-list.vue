<template>
    <div class="content">
        <back-btn></back-btn>
        <section class="main">
            <div class="main-bg">
                <div class="car-list">
                    <ul class="car-row" v-for="(item,index) in list" :key="index">
                        <li class="car-item" v-for="(minItem,minIndex) in item" :key="minIndex">
                            <div class="imgbox">
                                <img :src="minItem.icon" alt />
                            </div>
                            <div class="car-name">{{minItem.name}}</div>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- 两个柱子 -->
            <div class="bar-box bar-box-left">
                <div class="bar-bg"></div>
            </div>
            <div class="bar-box bar-box-right">
                <div class="bar-bg"></div>
            </div>
        </section>
        <section class="footer"></section>
    </div>
</template>
 
<script>
import backBtn from '../components/back-btn.vue';
import utils from '../utils/utils.js';
let that;
export default {
    name: 'muesumList',
    components: {
        // eslint-disable-next-line vue/no-unused-components
        backBtn
    },
    data() {
		that = this;
        return {
			forumimg_host : HBUtils.imgHost.forumimg_host,
			ticket_id : '',
			list : []
		}
    },
    mounted() { 
		uti.getUserInfo().then(()=>{
			that.getCarList();
		})
	},
    computed: {},
    methods: {
        //获取用户信息
        getUserInfo() {
            const promise = new Promise((resolve, reject) => {
                utils.isLogin().then(()=>{
                    // this.ticket_id = '053c40866f7726ce4ba3e479a0371987';
                    // resolve();
                    HBUtils.callHandler('getUserInfo', '', res => {
                        let userInfo = HBUtils.userInfoToObject(res);
                        let { ticket_id = '' } = userInfo;
                        this.ticket_id = ticket_id;
                        if (ticket_id) {
                            resolve();
                        }
                        else {
                            reject();
                        }

                    })
                });
            })
            return promise;
		},
		//获取座驾列表
		getCarList(){
            let {ticket_id} = this;
            //获取兑换列表
            that.$api.get('getCarList',{ticket_id},(err,res)=>{
                if(err){
                    // eslint-disable-next-line no-undef
                    HBUtils.callHandler('makeToast', err.message);
                }
                else{
					let data = that.normalBackData(res);
					if(!Array.isArray(data)){
						return;
					}
                    that.list = that.disposeCarList(data);
                }
            });
		},
		//处理座驾列表
		disposeCarList(list){
			let arr = [];
			list.forEach((item,index)=>{
				if(index % 2 == 0){
					arr.push([]);
				}
				arr[arr.length-1].push(item);
			});
			return arr;
		},
		//通用返回数据
        normalBackData(res){
            return (res && res.info && res.info.data) || ''
        }
    },
    watch: {}
}
</script>
 
<style src="../assets/css/reset.css"></style>
<style src="../assets/css/muesum-list.scss" lang="scss" scoped></style>
 