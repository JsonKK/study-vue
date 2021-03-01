// 返回在vue模板中的调用接口
export default {
  // 从url取参数
  getUrlParam: function (paraName) {
    const url = document.location.toString();
    const arrObj = url.split("?");
    if (arrObj.length > 1) {
      const arrPara = arrObj[1].split("&");
      let arr;
      for (var i = 0; i < arrPara.length; i++) {
        arr = arrPara[i].split("=");
        if (arr != null && arr[0] == paraName) {
          return arr[1];
        }
      }
      return null;
    }else {
      return null;
    }
  },
  checkNullObj:function (obj) {
    return Object.keys(obj).length === 0
  }
}