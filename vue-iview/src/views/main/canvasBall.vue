<template>
    <div id="canvas-ball">
        <canvas class="ball-box" id="ball-box"></canvas>
    </div>
</template>
 
<script>
import { ball } from '../../utiles/ballAnimate.js';
export default {
    name: 'canvasBall',
    components: {},
    data() {
        return {
            ballNum : 200
        }
    },
    mounted() {
        this.initBall();

    },
    methods: {
        initBall() {
            let canvas = document.getElementsByClassName('ball-box')[0];
            let canvasBox = document.getElementById('canvas-ball');
            let arr = [];
            let {ballNum} = this;
            let canvasCon = canvas.getContext('2d');
            canvas.width = canvasBox.clientWidth;
            canvas.height = 600;
            
            
            for(let index=0;index<ballNum;index++){
                let minBall = new ball({ pic: 'ball-box' });
                arr.push(minBall);
            }
            setInterval(() => {
                canvasCon.clearRect(0,0,canvas.width,canvas.height);
                for(let item of arr){
                    item.move();
                }
            }, 1000/60);

        }
    }
}
</script>
 
<style lang="less" scoped>
.ball-box {
    // width: 100%;
    // height: 600px;
}
</style>
 