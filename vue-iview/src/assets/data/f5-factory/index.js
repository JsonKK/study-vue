// 文本组件对象
import text from './text';
//标题组件
import title from './title';

const main = {
  // 所有组件初始化对象
  modelData : {
    text,title
  },
  /**
  * 获取单个组件
  * @param name   定义
  */
  getModelObj({type}){
    if(!type){
      return {}
    }
    console.log(this.modelData);
  }
}

export default main;