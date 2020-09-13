/*
包含N个接口请求函数的模块   接口函数
函数的返回值依然是promise对象
*/

import ajax from "./ajax"

//1、根据经纬度获取 位置 详情
//export function  reqAddress(latitude,longitude) {}
export const  reqAddress = (geohash) =>ajax(`/position/${geohash}`) //param参数，写在路径，params则相当于post请求，参数不会在地址栏中显示

//2、获取 食品分类 列表
export const  reqFoodTypes = () =>ajax(`/index_category`)

//3、根据经纬度获取 商铺 列表
export const  reqShops = (longitude,latitude) =>ajax(`/shops`,{longitude,latitude})//query参数，query相当于get请求，在页面跳转的时候，可以在地址栏看到请求参数

//4、根据经纬度和关键字搜索商铺列表

//5、获取一次性验证码

//6、用户名密码登陆

//7、发送短信验证码

//8、手机号验证码登陆

//9、根据会话获取用户信息

//10、用户登出

