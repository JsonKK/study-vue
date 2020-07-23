import _ from 'underscore';

const addBaseInfo = function(list,proxy,module){
  if(!_.isArray(list) || !proxy){
    return list;
  }
  list.forEach((obj)=>{
    if(_.isString(obj.url) && _.isString(proxy)){
      obj.path = proxy + obj.url;
    }
    obj.module = module;
  })
  return list;
}

export {
  addBaseInfo
}