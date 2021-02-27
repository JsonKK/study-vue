<template>
    <div>
        <p>首页</p>
        <ul class="user-list">
            <li v-for="(item,index) in users" :key="index">
                {{item.name}}·{{item.age}}
                <button type="button" class="add-btn" @click="addAge(index,item.age,item.name)">加年龄</button>
            </li>
        </ul>
        <div class="number-box" @mousemove="addNumber">{{number}}</div>
        <div class="number-box" @mousemove="addNumber2">{{number}}</div>
    </div>
</template>
<script>
    let that;

    const restArguments = function(func, startIndex) {
        startIndex = startIndex == null ? func.length - 1 : +startIndex;
        return function() {
            var length = Math.max(arguments.length - startIndex, 0),
                rest = Array(length),
                index = 0;
            for (; index < length; index++) {
                rest[index] = arguments[index + startIndex];
            }
            switch (startIndex) {
                case 0: return func.call(this, rest);
                case 1: return func.call(this, arguments[0], rest);
                case 2: return func.call(this, arguments[0], arguments[1], rest);
            }
            var args = Array(startIndex + 1);
            for (index = 0; index < startIndex; index++) {
                args[index] = arguments[index];
            }
            args[startIndex] = rest;
            return func.apply(this, args);
        };
    };

    // const delay = restArguments(function(func, wait, args) {
    //     return setTimeout(function() {
    //         return func.apply(null, args);
    //     }, wait);
    // });

    

    /**
    * 截流函数
    * @param fn   需要执行的函数
    * @param wait   等待的时间
    * @param options   leading:false 禁用第一次执行； trailing:false 禁用最后一次执行
    */
    const throttle = function(fn,wait,options){
        //定义定时器函数、上下文对象、参数、返回结果
        let timeout,context,args,result;
        // 上一次执行的时间戳
        let previos = 0;
        //如果没有options,则赋值为空对象
        if(!options) options = {};
        //定义延迟执行函数
        const later = function(){
            // 禁用第一次执行，则上次执行为0；否则为当前时间
            previos = options.leading === false ? 0 : (new Date()).valueOf();
            // 清除timeOut(因为已经是在timeout执行方法内，不需要clear)
            timeout = null;
            //执行函数
            result = fn.apply(context,args);
            // 清除定时器
            if(!timeout) context = args = null;
        }
        // 定义截流函数
        const throttled = function(){
            //获取当前时间戳
            let now = (new Date()).valueOf();
            //如果没有之前执行的时间并且禁用第一次执行，上次执行时间为当前时间
            if(!previos && options.leading === false) previos = now;
            // 计算执行等待时间
            // 等待时间 - （当前时间 - 上一次执行时间）
            let remaining = wait - (now - previos);
            // 上下文对象为当前this
            context = this;
            //args为数组格式
            args = arguments;
            //如果执行等待时间，不落在wait内，则执行。
            if(remaining <= 0 || remaining > wait){
                // 如果有计时器
                if(timeout){
                    clearTimeout(timeout);
                    timeout = null;
                }
                // 上次执行时间记录为当前
                previos = now;
                //替换函数this执行
                result = fn.apply(context,args);
                // 如果没有计时器，清除context 和 args
                if(!timeout) context = args = null;
            }
            //如果没有计时器，并且禁用最后一次执行
            else if(!timeout && options.trailing !== false){
                timeout = setTimeout(later,remaining);
            }

            return result;
        }
        //定义截流函数的取消方法
        throttle.cancel = function(){}
        //返回截流函数执行
        return throttled;
    }

    /**
    * 防抖函数
    * @param fn   需要执行的函数
    * @param wait   等待的时间
    * @param immediate   是否立即执行
    */
    const debounce = function(fn,wait,immediate){
        // 定义定时器和返回结果
        let timeout,result;
        //延迟执行方法
        const delay = function(fn,wait,...args){
            return setTimeout(()=>{
                return fn.apply(null,args);
            },wait);
        }
        //定时执行的方法
        const later = function(context,args){
            console.log(context);
            timeout = null;
            if(args) result = fn.apply(context,args);
        }

        // 防抖执行方法
        const debounced = function(args){
            // 如果有计时器，清除
            if(timeout) clearTimeout(timeout);
            // 如果立即执行
            if(immediate){
                // 获取是否立即执行函数
                let callNow = !timeout;
                timeout = setTimeout(later,wait);
                if(callNow) fn.apply(this,args);
            }
            else{
                timeout = delay(later,wait,this,args);
            }
        }

        // 取消函数
        debounced.cancel = function(){
            clearTimeout(timeout);
            timeout = null;
        }

        return debounced;
    }

    // 简化版
    const debounce2 = function (fn, wait = 300, immediate) {
        let timer;
        return function () {
            if (timer) clearTimeout(timer);
            if (immediate) {
            // 如果已经执行过，不再执行
            let callNow = !timer;
            timer = setTimeout(() => {
                timer = null;
            }, wait)
            if (callNow) {
                fn.apply(this, arguments)
            }
            } else {
            timer = setTimeout(() => {
                fn.apply(this, arguments)
            }, wait);
            }
        }
    }

    export default {
        props: {},
        components: {},
        data(){
            that = this;
            return {
                users : [
                    {name : '小明',age: 18},
                    {name : '小红',age: 16},
                ],
                number : 1
            }
        },
        mounted(){
        },
        methods : {
            //数字增加
            addNumber: throttle(()=>{
                that.number++;
            },100),
            //数值增加
            addNumber2: debounce(()=>{
                that.number++;
            },1000),
            addAge(index,age,name){
                let data = {name,age:age+1}
                //赋值后数据数据不会刷新
                this.users[index] = data;
                console.log(this.users[index]);
                //强制触发页面重新渲染
                this.$forceUpdate();
                //使用$set方法来修改数据
                // this.$set(this.users,index,data);
            }
        },
        watch : {
        }
    }
</script>
<style lang="less" scoped>
.add-btn{
    margin-left: 20px;
}
.user-list{
    li{
        display: block;
        margin: 14px auto;
    }
}
.number-box{
    height: 300px;
    width: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f1f1f1;
    color: #212121;
    margin: 10px auto;
    font-size: 32px;
}
</style>