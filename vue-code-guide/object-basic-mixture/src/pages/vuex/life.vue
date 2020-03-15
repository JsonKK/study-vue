<template>
    <div id="life">
        <ul id="list">
            <li class="line" v-for="(item,index) in list" :key="index">
                {{index+1}}.<b>{{item.title}}</b><span class="light">[{{item.key}}]</span>
            </li>
        </ul>
    </div>
</template>
 
<script>
let that;
let local = {
    addItem(title,key){
        if(Array.isArray(that && that.list))
            that.list.push({title,key});
    }
}
export default {
    name: '',
    props: {},
    components: {},
    data() {
        that = this;
        return {
            list : []
        }
    },
    //生命周期学习
    beforeCreate(){
        //事件还未加载完成,data未执行
        local.addItem('初始化事件&生命周期开始','beforeCreate');
    },
    created(){
        //事件加载并且data方法执行
        local.addItem('初始化注入&校验','created');
    },
    beforeMount(){
        // 虚拟dom准备好，准备渲染
        local.addItem('将template编译到render中,或者将el外部的html作为template进行编译完成','beforeMout');
        //dom未生成打印不出
        let life = document.getElementById('life');
    },
    //初始化
    mounted() { 
        local.addItem('创建vm.$el,并用其代替el','mounted');
    },
    // //更新前
    beforeUpdate(){
        local.addItem('当data内容被修改完，还未触发更新','beforeUpdate');
    },
    // //更新后
    updated(){
        //不能在这里面触发data更新，不然会造成死循环
        let title = '虚拟dom重新渲染,并应用更新';
        let key = 'updated';
        let dom = document.getElementById('list');
        let li = document.createElement('li');
        let lang = this.list.length+1;
        li.innerHTML = `${lang}.<b>${title}</b><span class="light">[${key}]</span>`;
        li.className += 'line';
        dom.appendChild(li);
    },
    //销毁前
    beforeDestroy(){
        console.log('销毁前','beforeDestroy');
    },
    //销毁后
    destroyed(){
        console.log('销毁后','destroyed');
    },
    computed: {},
    methods: {
        
    },
    watch: {},
    filters: {}
}
</script>
 
<style scoped lang="less">
    @import '../../assets/style/life.less';
    
</style>
 