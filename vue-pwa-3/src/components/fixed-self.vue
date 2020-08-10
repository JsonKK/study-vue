<template>
  <section :class="['bottom-fixed', 'bottom-fixed-'+tapIndex]" v-if="userInfo && userInfo.card_id">
    <div class="left">{{userInfo.rank}}</div>
    <div class="middle">
      <div class="self-imgbox">
        <img :src="`${avatar_host+userInfo.avatar}?imageView/2/w/92/interlace/1`" />
      </div>
      <div class="user-info">
        <p class="user-name-big">{{userInfo.nickname}}</p>
        <div class="row">
          <span class="min-icon" v-if="userInfo.icon_level">
						<img :src="`${forumimg_host + userInfo.icon_level}`" />
					</span>
					<span class="min-icon" v-if="userInfo.sex_type>0">
						<!-- <img src="../assets/img/sex-1.png" > -->
						<img :src="`${sexImgs[userInfo.sex_type-1]}`" />
					</span>
					<template v-if="userInfo.card_level.indexOf('N') == -1">
						<span class="user-id pretty">{{userInfo.card_id}}</span>
					</template>
					<template v-else>
						<span class="user-id">他趣ID:{{userInfo.card_id}}</span>
					</template>
          
        </div>
      </div>
    </div>
    <div class="right">
			<template v-if="userInfo.rankStr == 1">
				<p>第一名</p>
			</template>
			<template v-else-if="userInfo.rankStr && userInfo.rankStr.indexOf('+') == -1">
				<p>距上一名差:{{userInfo.distance}}</p>
			</template>
      <p >当前<span class="light-num">{{userInfo.disposeValue}}</span></p>
    </div>
  </section>
</template>
 
<script>
	import sex1 from '../assets/img/sex-1.png';
  import sex2 from '../assets/img/sex-2.png';
  export default {
    name: '',
    props:{
      // 个人信息
      userInfo : {
        type : Object,
        default(){
          return {}
        }
      },
      //页签索引
      //用于切换背景
      tapIndex : {
        type : Number,
        default : 1
      }
    },
    components: {},
    data(){
      return{
				// 头像图片前缀
				// eslint-disable-next-line no-undef
				avatar_host: HBUtils.imgHost.avatar_host,
				//社区图片前缀
				// eslint-disable-next-line no-undef
				forumimg_host: HBUtils.imgHost.forumimg_host,
				sexImgs : [sex1,sex2]
			}
    },
    mounted(){
    },
    computed:{
		},
    methods:{},
    watch:{}
  }
</script>
 
<style lang="scss" scoped>
.bottom-fixed{
  $left:94px;
  $right:250px;
  $height:139px;
  width: 750px;
  height: 150px;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 0 $right 0 $left;
  color: #fff;
  .left{
    position: absolute;
    left: 0;
    width: $left;
    box-sizing: border-box;
    padding-left: 20px;
    height: $height;
    line-height: $height;
    font-size: 34px;
  }
  .right{
    position: absolute;
    right: 0;
    width: $right;
    height: $height;
    box-sizing: border-box;
    font-size: 28px;
    top: 0;
    padding-right: 21px;
    text-align: right;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 20px;
    line-height: 40px;
  }
  .middle{
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    height: $height;
  }
}
.bottom-fixed-1{
  background: url(../assets/img/self-item-bg-1.png) no-repeat;
}
.bottom-fixed-2{
  background: url(../assets/img/self-item-bg-2.png) no-repeat;
}
.big{
  transform: scale(1.3) translateX(-30px);
}
.light-num{
  font-size: 28px;
  vertical-align: middle;
  font-weight: 300;
  &:before{
    content: '';
    display: inline-block;
    width: 36px;
    height: 36px;
    background: url(../assets/img/self-love-icon.png) no-repeat;
    margin: 0 12px;
    vertical-align: middle;
  }
}
.self-imgbox{
  width: 100px;
  height: 100px;
  box-sizing: border-box;
  border: 4px solid #ffffff;
  border-radius: 100%;
  line-height: 90px;
  text-align: center;
  font-size: 0;
  margin-right: 16px;
  img{
    width: 92px;
    height: 92px;
    border-radius: 100%;
  }
}
.user-name-big{
  font-size: 33px;
  width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 50px;
  height: 50px;
}
</style>
 