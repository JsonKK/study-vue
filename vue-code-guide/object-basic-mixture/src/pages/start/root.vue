<template>
    <div>
        <!-- 为什么这个标签在切换路由时候还会一直显示 -->
        <h2>路由表的组件群</h2>
        <router-view name="menu"></router-view>
        <router-view name="footer"></router-view>
    </div>
</template>
<script>
    export default {
        props: {},
        components: {},
        data(){
            return {
            }
        },
        mounted(){
            console.log(1)
        },
        methods : {
        },
        watch : {
        }
    }
</script>
<style lang="less" scoped>
</style>