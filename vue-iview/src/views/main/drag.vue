<template>
    <div style="height:300px;position:relative;">
        <div class="box"></div>
    </div>
</template>
 
<script>
export default {
    name: 'drag',
    components: {},
    data() {
        return {

        }
    },
    mounted() {
        this.initDrag();
        this.initSum();
    },
    computed: {},
    methods: {
        initDrag() {
            //获取盒子
            var ele = document.querySelector('.box');
            // 移动最大宽高
            var maxW = document.documentElement.clientWidth - ele.offsetWidth;
            var maxH = document.documentElement.offsetHeight - ele.offsetHeight;
            ele.onmousedown = function (e) {//在元素上按下鼠标
                e = e || window.event;
                // 鼠标到元素ele的左边和上边距离
                var nX = e.offsetX;
                var nY = e.offsetY;
                document.onmousemove = function (e) {//在document范围移动鼠标
                    e = e || window.event;
                    //计算元素的偏移量
                    // 鼠标距离浏览器窗口的左边和上边距离与盒子的内距离的差值
                    var nLeft = e.pageX - nX - 250;
                    var nTop = e.pageY - nY - 168 + 32;
                    //限制元素的最大最小偏移量
                    nLeft = Math.min(maxW, Math.max(0, nLeft));
                    nTop = Math.min(maxH, Math.max(0, nTop));
                    ele.style.left = nLeft + "px";
                    ele.style.top = nTop + "px";
                }
            }
            // 鼠标已开，move事件消失
            document.onmouseup = function () {
                document.onmousemove = null;
            }
        },
        initSum() {
            function random(num) {
                if (num === undefined) {
                    num = 100;
                }
                return parseInt(Math.random() * num)
            }
            function sum(arr) {
                var num1 = arr[random(arr.length - 1)]
                var num2;
                while (!(num2 >= 0)) {
                    var cacheNum = arr[random(arr.length - 1)];
                    if (cacheNum != num1) {
                        num2 = cacheNum;
                    }
                }
                return num1 + num2;
            }
            var arr = [];
            var i = 0;
            while (i < 10) {
                var num = random();
                if (!arr.includes(num)) {
                    i++;
                    arr.push(num);
                }
            }
            var target = sum(arr);
            console.log('targer', target);
            console.log('arr', arr);
            console.log(this.twoSum(arr,target));
        },
        twoSum(nums, target) {
            let map = {};//key数字 value下标
            let loop = 0;//循环次数
            let dis;//目标与当前值的差
            while (loop < nums.length) {
                dis = target - nums[loop];
                if (map[dis] != undefined) {
                    return [map[dis], loop];
                }
                map[nums[loop]] = loop;
                loop++;
            }
            return 0;
        }
    },
    watch: {}
}
</script>
 
<style scoped>
.box {
    width: 100px;

    height: 100px;

    background: #03ccbb;

    position: absolute;

    left: 0;

    top: 0;
}
</style>
 