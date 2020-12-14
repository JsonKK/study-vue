export default {
  getUserInfo(){
    return new Promise((resolve)=>{
      setTimeout(()=>{
        resolve({
          tickid : 'test123',
          v : '7373'
        })
      },500)
    })
  }
}