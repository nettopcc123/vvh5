/**
 * Author: Fay(tigertop001@gmail.com)
 * Date: 2019/11/14
 * Last Modified by: Fay
 * Copyright (c) 2019, HuaSheng, Inc.
 * Description: 请求工具
 */
import axios from 'axios'
import store from '@/store/Store'
// 创建axios实例
const service = axios.create({
    baseURL: process.env.BASE_API, // api 的 base_url
    timeout: 300000 // 请求超时时间
})

service.interceptors.request.use(
    config => {
        config.headers.channel = '1';
        if (store.getters.token) {
            config.headers.authtoken = store.getters.token;
        }
        return config
    },
    error => {
        Promise.reject(error)
    }
)

service.interceptors.response.use(
    response => {
      let res = response.data
      return res
    },
    error => {
        return Promise.reject(error);
    }
)
export default service
