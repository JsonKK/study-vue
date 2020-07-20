<template>
    <dd class="rank-list">
        <div :class="['rank-item','rank-item-'+tapIndex]" v-for="(item,index) in list" :key="index">
            <div class="left">
				<template v-if="index<3">
                	<span :class="['item-num','item-num-' + (index+1)]"></span>
				</template>
				<template v-else>
					<span class="item-normal-num">{{index+1}}</span>
				</template>
            </div>
            <div class="middle">
                <a :href="`ushengsheng.xjb://xingjiabi?m=${item.is_live == '1' ? 'live&a=watch&' : 'personal&a=homepage&a'}id=${item.uuid}`">
                    <div class="imgbox">
                        <img :src="`${avatar_host+item.avatar}?imageView/2/w/88/interlace/1`" alt/>
						<span class="live-logo" v-if="item.is_live == '1'"></span>
                    </div>
                </a>
                <div class="user-info">
                    <p class="user-name">{{item.nickname}}</p>
                    <div class="row">
                        <span class="min-icon" v-if="item.icon_level">
							<img :src="`${forumimg_host + item.icon_level}`" />
						</span>
						<span class="min-icon" v-if="item.sex_type>0">
							<img :src="`${sexImgs[item.sex_type-1]}`" />
						</span>
						<template v-if="item.card_level.indexOf('N') == -1">
							<span class="user-id pretty">{{item.card_id}}</span>
						</template>
						<template v-else>
							<span class="user-id">他趣ID：{{item.card_id}}</span>
						</template>
                    </div>
                </div>
            </div>
            <div class="right">
                {{item.disposeValue}}
                <span class="item-love-icon"></span>
            </div>
        </div>
    </dd>
</template>
 
<script>
import sex1 from '../assets/img/sex-1.png';
import sex2 from '../assets/img/sex-2.png';
export default {
    props: {
		list : {
			type : Array,
			default(){
				return []
			},
		},
		tapIndex : {
			type : Number,
			default : 1
		}
	},
    components: {},
    data() {
        return {
			// 头像图片前缀
			// eslint-disable-next-line no-undef
			avatar_host: HBUtils.imgHost.avatar_host,
			//社区图片前缀
			// eslint-disable-next-line no-undef
			forumimg_host: HBUtils.imgHost.forumimg_host,
			sexImgs : [sex1,sex2]
		}
    },
    mounted() { },
    computed: {},
    methods: {
        //跳转个人页
        linkUser({ id, state }) {
            let url = 'ushengsheng.xjb://xingjiabi?m=';
            if (state == 1) {
                url += 'live&a=watch&id=' + id;
            }
            else {
                url += 'personal&a=homepage&aid=' + id;
            }
            window.location.href = url;
        },
    },
    watch: {}
}
</script>
 
<style lang="scss" scoped>
.rank-list {
    margin: 0 auto;
    width: 673px;
}
.rank-item {
    $left: 84px;
    $right: 195px;
    $height: 141px;
    width: 673px;
    height: $height;
    position: relative;
    padding: 0 $right 0 $left;
    margin-top: 10px;
    .left {
        position: absolute;
        left: 0;
        width: $left;
        text-align: center;
        height: $height;
        line-height: $height;
        box-sizing: border-box;
        padding-left: 13px;
        color: #fff2e8;
        margin-right: 4px;
        font-size: 36px;
    }
    .right {
        position: absolute;
        right: 0;
        // width: $right;
        height: $height;
        line-height: $height;
        color: #fff;
        box-sizing: border-box;
        text-align: right;
        padding-right: 30px;
        font-size: 28px;
        top: 0;
    }
    .item-num {
        width: 44px;
        height: 54px;
        display: block;
        margin: 0 auto;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
	}
	.item-normal-num{
		width: 42px;
        height: 42px;
        display: block;
        margin: 0 auto;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
		line-height: 42px;
		text-align: center;
		font-size: 24px;
		color: #d9be9c;
		background: url(../assets/img/item-num-bg.png) no-repeat;
	}
    .item-num-1 {
        background: url(../assets/img/rank-num-1.png) no-repeat;
    }
    .item-num-2 {
        background: url(../assets/img/rank-num-2.png) no-repeat;
    }
    .item-num-3 {
        background: url(../assets/img/rank-num-3.png) no-repeat;
    }
    .middle {
        display: flex;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-items: center;
        height: $height;
    }
}
.rank-item-1 {
    background: url(../assets/img/rank-item-bg-1.png) no-repeat;
}
.rank-item-2 {
    background: url(../assets/img/rank-item-bg-2.png) no-repeat;
}
.imgbox {
    width: 88px;
    height: 88px;
    margin: 0 24px 0 0;
	position: relative;
    img {
        border: 2px solid #fff;
        width: 88px;
        height: 88px;
        border-radius: 100%;
	}
}
.live-logo{
	$width:73px;
	$height:27px;
	display: block;
	width: $width;
	height: 27px;
	position: absolute;
	bottom: -$height/3;
	left: 50%;
	margin-left: -$width/2;
	background: url(../assets/img/live-icon.png) no-repeat;
}
.user-info {
    flex-grow: 1;
    color: #fff;
}
.row {
    width: 100%;
    overflow: hidden;
}
.min-icon {
    max-width: 60px;
    display: inline-block;
    vertical-align: middle;
    img {
        width: 100%;
        height: auto;
    }
}
.user-id {
    vertical-align: middle;
    font-size: 20px;
}
.pretty:before {
    content: "";
    background: url(../assets/img/icon-pretty.png) no-repeat;
    background-size: contain;
    width: 22px;
    height: 22px;
    vertical-align: -2px;
    display: inline-block;
    margin-right: 4px;
}
.user-name {
    font-size: 26px;
    width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 50px;
    height: 50px;
}
.item-love-icon {
    display: inline-block;
    vertical-align: middle;
    background: url(../assets/img/item-love-icon.png) no-repeat;
    width: 36px;
    height: 36px;
}
</style>
 