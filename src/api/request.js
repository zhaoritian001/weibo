/*
 * @Author: 赵东升
 * @Date: 2022/11/3
 */
import axios from 'axios'

const request = axios.create({
    baseURL: 'https://weibo.com/ajax/',
    timeout: 5000
})

request.interceptors.request.use(config => {
    // 获取token
    return config
}, error => {
    return Promise.reject(error)
})

request.interceptors.response.use(res => {
    return res.data
}, error => {
    if (error.status === 401) {
        console.log('没有token');
    }
})

export { request }