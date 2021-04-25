// 手势事件
export default function VTouch(app){
  // 定义滑动距离
  const distance = 30;
  //全局挂载touch属性
  app.directive('touch',{
    // 当元素第一次绑定到元素并且在挂载父元素之前调用
    beforeMount(el,binding){
      console.log('beforeMount-el',el);
      console.log('beforeMount-binding',binding);
      el.addEventListener('click',(e)=>{
        binding.value('come in ');
      })
      
    }
  })
}