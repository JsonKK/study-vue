const ball = class Ball {
    constructor({ pic }) {
        console.log(pic)
        this.init(pic)
    }

    //初始化
    init(con) {
        let picDom = document.getElementById(con);
        let colors = this.getColors();
        this.picDom = picDom;
        this.picWidth = picDom.width;
        this.picHeight = picDom.height;
        this.r = this.random(1, this.picHeight < this.picWidth ? this.picHeight / 30 : this.picWidth / 30);
        this.x = this.random(this.r, this.picWidth-this.r);
        this.y = this.random(this.r, this.picHeight-this.r);
        this.xV = this.random(0,2,true);
        this.yV = this.random(0,1,true);
        this.color = colors[this.random(0,colors.length-1)];
        this.xAdd = true;
        this.yAdd = true;
        this.draw();
    }

    draw(){
        let content = this.picDom.getContext('2d');
        let {x,y,r,picDom,color} = this;
        // content.clearRect(0,0,picDom.width,picDom.height);
        content.beginPath();
        content.fillStyle = color;
        content.arc(x,y,r,0,Math.PI*2);
        content.fill();
    }

    clearRect(){
        let content = this.picDom.getContext('2d');
        let {picDom} = this;
        content.clearRect(0,0,picDom.width,picDom.height);
    }

    move(){
        let {x,y,xV,yV,picWidth,picHeight,r} = this;
        if(x+xV >= picWidth - r){
            this.xAdd = false;
        }
        if(x-xV <= 0 + r){
            this.xAdd = true;
        }
        this.xAdd ? this.x += xV : this.x -= xV;
        if(y+yV >= picHeight - r){
            this.yAdd = false;
        }
        if(y-yV <= 0 + r){
            this.yAdd = true;
        }
        this.yAdd ? this.y += yV : this.y -= yV;
        this.draw();
    }

    //颜色颜色
    getColors(){
        return ['#FFFFCC','#FF6666','#FFFF00','#0066CC','#336633','#99CC66','#0099CC','#FF6666','#CCCCCC']
    }

    //返回随机数
    random(min, max,isFloat) {
        if(isFloat){
            return Math.random() * (max - min) + min;
        }
        else{
            return Math.ceil(Math.random() * (max - min) + min);
        }
    }
}

export { ball };