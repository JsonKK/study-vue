import Vue from "vue"
import axios from '@/libs/api.request'
import servicesConfig from "@/api/config/service-config"
import underscore from "underscore-extend";
import { getToken } from '@/libs/util';
import Cookies from 'js-cookie';
import { Toast } from 'vant';
Vue.use(Toast);
var instance = {};
var isLoading = "";

/**
 * 获取loadingButton
 */
var _getLoadingButton = function () {
	var loadingButton = {
		instance: instance,
		isLoading: isLoading
	};
	instance = {};
	isLoading = "";
	return loadingButton;
}

let getAuthClient = function(){
	let token = getToken()
	return {
		'x-client-token' : token,
		'Authorization': `${token}`,
		
	}
}

/**
 * 获取service
 * @param {Object} params
 */
var _getServiceUrl = function (params) {
	var serviceUrl;
	if (!params.otherParams) {

		return servicesConfig[params["service"]];
	}
	for (var key in params.otherParams) {
		serviceUrl = (serviceUrl || servicesConfig[params["service"]]).replace("{" + key + "}", params.otherParams[key]);
	}

	return serviceUrl;
};

/**
 * json参数序列化
 * @param {Object} data  参数
 */
var _addUrlParam = function (data) {
	var postData = "";
	for (var key in data) {
		if (!postData) {
			postData = key + "=" + data[key];
		} else {
			postData += "&" + key + "=" + data[key];
		}
	}

	return postData;
};

	/**
  * 添加URL的参数
  * @param name   名称
  * @param value  值
  * @param url    链接地址
  */
var addUrlParam = function addUrlParam(name, value, url) {
	if (!value) {
		return url;
	}
	var tmpUrl = url;

	if (tmpUrl.indexOf(name + "=") > -1) {
		return tmpUrl = this.replaceParamVal(tmpUrl, name, value);
	}

	// 判断是否已经有其他参数
	if (tmpUrl.indexOf("?") >= 0) {
		tmpUrl += "&";
	} else {
		tmpUrl += "?";
	}
	tmpUrl += name + "=" + value;

	return tmpUrl;
};

/**
 * 提交表单数据
 * @param {Object} params
 */
var _postJson = function (params) {
	var curLoadingButton = _getLoadingButton();

	// 判断按钮状态
	if (curLoadingButton.instance._data && curLoadingButton.instance._data[curLoadingButton.isLoading]) {
		return;
	}

	// 判断是否传入loadingButton
	if (curLoadingButton.isLoading) {
		curLoadingButton.instance._data[curLoadingButton.isLoading] = true;
    }
    
    /* 基础通信参数  */
	var _authClient = function() {
		
		var deviceId = Cookies.get("deviceId") || "H5";
		var auth = {
			authParams : {
				timestamp : new Date().getTime(),
				token : Cookies.get("token_h5") ? decodeURIComponent(Cookies.get("token_h5")) : "",
				deviceId : deviceId
			},
			clientParams : {
				os: Cookies.get("os_type") || "H5",
				network: "",
				deviceId: deviceId,
				appVersion: ""
			},
			
			appId : '300000000000000001',
			
			siteId : '100000',

			miniId : Cookies.get("miniId") || ""
		};
		
		return auth;
	};

	// 默认参数
	var defaultParams = {
		headers: getAuthClient(),
		service: "",                 // 服务的配置名称
		data: _authClient(),                    // 发送的data
		params: {},
		success: function (d) { },      // 成功后回调
		error: null                  // 失败后回调
	};

	var ajaxParams = underscore.deepExtend(true,defaultParams, params);
	// if ((ajaxParams.type == "GET" || ajaxParams.type == "DELETE") && ajaxParams.data && typeof (ajaxParams.data) == "object") {
	// 	ajaxParams.params = ajaxParams.data;
	// }

	// rest请求路径
	ajaxParams["url"] = _getServiceUrl(ajaxParams);

	// 添加随机数
	ajaxParams["url"] = addUrlParam("rnd", Math.random(), ajaxParams["url"]);

	//成功回调方法重载
	ajaxParams.success = function (d) {

		var data = typeof d.data == "string" ? JSON.parse(d.data) : d.data;
		try {
			if (data) {
				switch (data.status) {
					case 1:// 成功
						if (data.content) {
							if (params.success) {
								params.success.call(this, data.content, data);
							}
						} else {
							if (params.success) {
								params.success.call(this, null, data);
							}
						}
						break;
					case 2:// 回话过期或者未登录

						break;
					default:// 失败或者其他

						var message = data.message ? data.message : "有点忙开个小差，稍后再试~";
						if (params.error) {
							params.error.call(this, message, data);
						} else {
                            Toast(message);
							// new Vue().$Message.error(message);
						}
						break;
				}
			}
		} catch (e) {
			console.log(e);
		}
	};

	var errorFn = ajaxParams.error;
	ajaxParams.error = function (d) {

		var data = d.data;
		if (errorFn) {
			errorFn(data.message, data);
		} 
		
		// else {
		// 	new Vue().$Message.error(data && data.message ? data.message : "有点忙开个小差，稍后再试~");
		// }
	};

	return new Promise((resolve, reject) => {

		// if (process.env.NODE_ENV !== 'production') console.log('ajaxParams : ', ajaxParams);
		ajaxParams.method = ajaxParams.type;
		delete ajaxParams.type;

		axios.request(ajaxParams).then(({ data, status }) => {
			resolve(data.data);
		}).catch((e) => {
			// reject(e);
			console.log(e);
			ajaxParams.error(e);
			resolve({});
		}).finally(() => {

			// 判断是否传入loadingButton
			if (curLoadingButton.isLoading) {
				curLoadingButton.instance._data[curLoadingButton.isLoading] = false;
			}			
		});
	})

	// try {
	// 	if (process.env.NODE_ENV !== 'production') console.log('ajaxParams : ', ajaxParams);
	// 	ajaxParams.method = ajaxParams.type;
	// 	delete ajaxParams.type;
	// 	axios.request(ajaxParams);
	// } catch (error) {
	// 	// 去除加载状态
	// 	curLoadingButton.instance[curLoadingButton.isLoading] = false;
	// }
}

export default {
	/**
	 * 提交Json对象
	 * @param {Object} params 配置定义的key
	 */
	postJson: function (params) {
		return _postJson(params);
	},

	/**
	 * 设置按钮加载样式
	 * @param $button 按钮
	 */
	loadingButton: function (buttonInstance, loadingButton) {
		var that = this;

		if (!(buttonInstance && loadingButton)) {
			return that;
		}
		instance = buttonInstance;
		isLoading = loadingButton;

		return that;
	},

	getAuthClient	
}