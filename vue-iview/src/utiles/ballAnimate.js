const  ball = class Ball{
  constructor(id){
    this.init(id)
  }
  //获取画布相关信息
  getCanvasInfo(id){
    if(!id || !document.getElementById(id)){
      return false
    }
    let obj = {};
    
  }
  //初始化
  init(content){
    
    this.x = 'xxx';
    this.random()
  }

  random(min,max){
    return Math.random()*(max-min) + min;
  }
}

export {ball};