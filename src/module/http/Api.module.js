import request from '@m/http/Request.module'
import qs from 'qs';

export function loginByPwd(param) { // 密码登入
    return request({
        baseURL: '/api', // 请求自己配的json
        url: '/api/ca4/front/h5/login',
        method: 'post',
        data: qs.stringify(param)
    })
}

export function register(param) { // 注册
    return request({
        baseURL: '/api', // 请求自己配的json
        url: '/api/ca4/front/h5/register',
        method: 'post',
        data: param
    })
}