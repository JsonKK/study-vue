export default function ({route, req, res, redirect,$axios}) {
  let isClient = process.client;
  let isServer = process.server;
  var token, path;

  // console.log('$axios',$axios);
  // console.log('req',req);
  // console.log('res',res);
  

  return new Promise((resolve)=>{
    if(route.name === 'error'){
      $axios.get('/api/live_trade/v1/RegularActivity/getHostRank?current_uuid=&id=7').then((res)=>{
        redirect({
          name : 'rule',
          params: { slug: 'mySlug' }
        })
        console.log(res.data);
        resolve();
      })
      
    }
    else{
      console.log(route);
      resolve();
    }
  })
 }