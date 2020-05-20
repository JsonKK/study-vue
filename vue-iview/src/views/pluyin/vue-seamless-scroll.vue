<template>
    <div class="content">
			<vue-seamless-scroll :data="one" :class-option="optionOne" class="seamless-warp2">
        <ul class="item">
					<!-- 需要为子集li增加宽高，且宽度不能大于容器 -->
            <li v-for="(item,index) in one" v-text="item" :key="'index'+index"></li>
        </ul>
    	</vue-seamless-scroll>
    </div>
</template>
 
<script>
import scroll from 'vue-seamless-scroll';
export default {
    name: 'pluyin-vue-seamless-scroll',
    components: {
        [scroll.name]: scroll
    },
    data() {
        return {
            optionOne: {
                limitMoveNum: 3,
								direction:2,
								// step: 0.2, // 数值越大速度滚动越快
                // limitMoveNum: 3 // 开始无缝滚动的数据量 this.dataList.length
                // hoverStop: true, // 是否开启鼠标悬停stop
                // direction: 0, // 0向下 1向上 2向左 3向右
                // openWatch: true, // 开启数据实时监控刷新dom
                // // singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
                // singleHeight: 20, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
                // waitTime: 1000 // 单步运动停止的时间(默认值1000ms)
            },
            one: []
        }
    },
    mounted() {
        this.initOne();
    },
    computed: {
    },
    methods: {
        initOne() {
            let arr = [];
            let str = 'abc';
            for (let i = 0; i < 5; i++) {
                arr.push(str + i + 'num' + parseInt(Math.random() * 100))
            }
            this.one = arr;
        }
    },
    watch: {}
}
</script>
 
<style scoped lang="less">
.seamless-warp2 {
	overflow: hidden;
	height: 25px;
	width: 380px;
	background-color: #787878;
	ul.item {
		display: flex;
		li {
			width: 100px;
			height: 25px;
			list-style: none;
		}
	}
}
</style>
 