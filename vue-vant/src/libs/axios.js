import axios from 'axios'
// import store from '@/store'
import Vue from "vue"
import { getToken, getTokenType, getLanIp } from '@/libs/util'

// import { Spin } from 'view-design'
const addErrorLog = errorInfo => {
  const { statusText, status, request: { responseURL } } = errorInfo
  let info = {
    type: 'ajax',
    code: status,
    mes: statusText,
    url: responseURL
  }
//   if (!responseURL.includes('save_error_logger')) store.dispatch('addErrorLog', info)
}

class HttpRequest {
  constructor (baseUrl = "/") {
    this.baseUrl = baseUrl
    this.queue = {}
  }
  async getInsideConfig () {
    let token = getToken() || "dGVzdF9jbGllbnQ6dGVzdF9zZWNyZXQ="
    let token_type = getTokenType() || "Basic"

    // if(store.state.app.lanIp === '') {
    //   let lanIp = await getLanIp();
    //   store.commit('setLanIp', lanIp);
    // }
    const config = {
      baseURL: this.baseUrl,
      headers: {
        // 'x-client-token' : token,
        'Authorization': `${token}`,
        // 'Authorization': `${token_type} ${token}`,
        'base-params' : JSON.stringify({
          // 'lanIp' : store.state.app.lanIp,
          'deviceType' : ''
        })
      }
    }
    return config
  }
  destroy (url) {
    delete this.queue[url]
    if (!Object.keys(this.queue).length) {
      // Spin.hide()
    }
  }
  interceptors (instance, options) {
    // 请求拦截
    instance.interceptors.request.use(config => {
      // 添加全局的loading...
      if (!Object.keys(this.queue).length) {
        // Spin.show() // 不建议开启，因为界面不友好
      }
      this.queue[options.url] = true
      return config
    }, error => {
      return Promise.reject(error)
    })
    // 响应拦截
    instance.interceptors.response.use(res => {
      this.destroy(options.url)
      const { data, status } = res
      options.success && options.success({ data, status })
      return { data, status }
    }, error => {
      this.destroy(options.url)
      let errorInfo = error.response
      if (errorInfo) {
        const { response: { statusText, status, data }, config } = JSON.parse(JSON.stringify(error))
        new Vue().$Message.error(data && data.mesg ? data.mesg : "有点忙开个小差，稍后再试~");
      }
      return Promise.reject(error)
    })
  }
  async request (options) {
    const instance = axios.create()
    let insideConfig = await this.getInsideConfig();
    options = Object.assign(insideConfig, options)
    this.interceptors(instance, options)
    // if (process.env.NODE_ENV !== 'production') console.log(options);
    return instance(options)
  }
}
export default HttpRequest
