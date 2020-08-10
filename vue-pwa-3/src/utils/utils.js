export default {
  //判断是否登录
  isLogin(notToLogin){
    let that = this;
    return new Promise((resolve,reject)=>{
      window.HBUtils.callHandler('getVersion','',(value)=>{
        if(parseInt(value) > 11){
          // 告诉客户端再次回到此页面的时候需要刷新当前页
          window.HBUtils.callHandler('webViewAppearReload');
        }
      });
      window.HBUtils.callHandler('isUserLogined', '', (responseData) => {
        // 没登陆处理
        if(!responseData){
          reject();
          if(!notToLogin){
            that.toLogin();
          }
        }
        else{
          //登录
          resolve();
        }
      })
    })
  },
  //跳转登录页
  toLogin(){
    window.HBUtils.callHandler('goLogin','');
  },
  getUserInfo(){
    const promise = new Promise((resolve,reject)=>{
        this.ticket_id = '053c40866f7726ce4ba3e479a0371987';
        resolve();
        hbUtils.callHandler('getUserInfo', '', res => {
            let userInfo = hbUtils.userInfoToObject(res);
            let {ticket_id = ''} = userInfo;
            this.ticket_id = ticket_id;
            if(ticket_id){
                resolve();
            }
            else{
                reject();
            }
            
        })
    })
    return promise;
  }
}