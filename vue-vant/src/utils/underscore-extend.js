/**
 * underscore扩展方法
 * @author	cyixiang@linewell.com
 * @since	2018-07-09
 */

import _ from 'underscore';

let local = {

	deepExtend() {
		var extended = {};
		var deep = false;
		var i = 0;
	
		// 判断是否为深拷贝
		if (Object.prototype.toString.call(arguments[0]) === '[object Boolean]') {
			deep = arguments[0];
			i++; //如果为深拷贝则初始的i为1或者为0
		}
	
		// 将对象属性合并到已存在的对象中
		var merge = function (obj) {
			for (var prop in obj) {
				if (obj.hasOwnProperty(prop)) {
					// 如果属性为对象并且需要深拷贝时则使用函数递归、反之则将当前的属性替换现有的属性
					if (deep && Object.prototype.toString.call(obj[prop]) === '[object Object]') {
						extended[prop] = local.deepExtend(extended[prop], obj[prop]);
					} else {
						extended[prop] = obj[prop];
					}
				}
			}
		};
	
		// 遍历所有对象属性
		for (; i < arguments.length; i++) {
			merge(arguments[i]);
		}
	
		return extended;		
	}
};

_.mixin({

	deepExtend : local.deepExtend,

  /**
   * 对象深拷贝
   */
	// deepExtend: function (target) {
	// 	var deep = true,
	// 	args = [].slice.call(arguments, 1);

	// 	var extend = function (target, source, deep) {
	// 	var isArray = _.isArray;
	// 	var isWindow = function (obj) {
	// 		return obj != null && obj == obj.window;
	// 	};
	// 	var isPlainObject = function (obj) {
	// 		return _.isObject(obj) && !isWindow(obj) && obj.__proto__ == Object.prototype;
	// 	};
	// 	for (var key in source) {

	// 		//如果深度扩展
	// 		if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
	// 		//如果要扩展的数据是对象且target相对应的key不是对象
	// 		if (isPlainObject(source[key]) && !isPlainObject(target[key])) target[key] = {}
	// 		//如果要扩展的数据是数组且target相对应的key不是数组
	// 		if (isArray(source[key]) && !isArray(target[key])) target[key] = []
	// 		extend(target[key], source[key], deep)
	// 		} else if (source[key] !== undefined) target[key] = source[key]
	// 	}
	// 	};

	// 	if (typeof target == 'boolean') { //当第一个参数为boolean类型的值时，表示是否深度扩展
	// 	deep = target
	// 	target = args.shift() //target取第二个参数
	// 	}

	// 	//遍历后面的参数，全部扩展到target上
	// 	args.forEach(function (arg) {
	// 	extend(target, arg, deep)
	// 	});
	// 	return target;
	// }
});

export default _;
