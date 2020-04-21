<template>
	<header class="header-bar">
        <a class="icon-pre icon-more"></a>
        <div class="search">
            <van-search
                v-model="value"
                shape="round"
                placeholder="请输入搜索关键词"
                style="height:100%"
                readonly
            />
        </div>
        <a class="icon-pre icon-my js-jump"></a>
    </header>
</template>
 
<script>
// import '../../assets/style/common/header.less';
import { Search } from 'vant';
export default {
	name: '',
	props: {},
	components: {
        [Search.name] : Search
    },
	data() { 
        return {
            value : ''
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
@import '../../assets/style/common/header.less';
</style>
 