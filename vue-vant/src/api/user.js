import axios from '@/libs/api.request'

export const login = ({ userName, password }) => {

  const data = {
    username : userName,
    password : password,
    grant_type: 'password',
    scope: 'read'    
  }
  return axios.request({
    url: '/authorization-server/oauth/token',
    headers: {
      'Authorization': 'Basic dGVzdF9jbGllbnQ6dGVzdF9zZWNyZXQ='
    },    
    params : data,
    method: 'post'
  })

  // const data = {
  //   userName,
  //   password
  // }
  // return axios.request({
  //   url: 'login', // mock拦截路径
  //   // url: '/authorization-server/oauth/token',
  //   // url: '/tongplatform/projects/personnel/v1/personnel-sso/login-by-code',
  //   data,
  //   method: 'post'
  // })
}

export const getUserInfo = (username) => {

  return axios.request({
    url: `/organization/user-info?uniqueId=${username}`,
    method: 'get'
  })  

  // return axios.request({
  //   url: 'get_info',
  //   params: {
  //     token
  //   },
  //   method: 'get'
  // })
}

export const logout = (token) => {
  return axios.request({
    url: 'logout',
    method: 'post'
  })
}

export const getUnreadCount = () => {
  return axios.request({
    url: 'message/count',
    method: 'get'
  })
}

export const getUnreadStatistic = () => {
  return axios.request({
    url: '/operation-manage/notify-message/index-count',
    method: 'get'
  })
}

export const getMessage = () => {
  return axios.request({
    url: 'message/init',
    method: 'get'
  })
}

export const getContentByMsgId = msg_id => {
  return axios.request({
    url: 'message/content',
    method: 'get',
    params: {
      msg_id
    }
  })
}

export const hasRead = msg_id => {
  return axios.request({
    url: 'message/has_read',
    method: 'post',
    data: {
      msg_id
    }
  })
}

export const removeReaded = msg_id => {
  return axios.request({
    url: 'message/remove_readed',
    method: 'post',
    data: {
      msg_id
    }
  })
}

export const restoreTrash = msg_id => {
  return axios.request({
    url: 'message/restore',
    method: 'post',
    data: {
      msg_id
    }
  })
}

export const checkPermission = menuId => {
  return axios.request({
    url: 'message/restore',
    method: 'get',
    params: {
      menuId
    }
  })
}

export const getAuthMenu = () => {
  return axios.request({
    url: '/organization/menu/curentUserMenu',
    method: 'get'
  })
}
