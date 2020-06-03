<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'App',
	components: {
	},
	metaInfo: {
		title: 'This is the test UI',
		meta: [
			{ httpEquiv: 'X-UA-Compatible', content: 'IE=edge,chrome=1' },
			{ name: 'renderer', content: 'webkit' },
			{ name: 'viewport' , content : 'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no'},
			{ name: 'format-detection', content : 'telephone=no'}
		]
	}
}
</script>

<style>
@import './assets/style/common/main.css';
@import './assets/style/common/media.css';
@import './assets/style/common/icon-font.css';
</style>
