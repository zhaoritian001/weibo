/*
 * @Author: 赵东升
 * @Date: 2022/11/3
 */
import { request } from "./request";

// 热搜
export function  _hotSearch () {
    return request({
        url: 'side/hotSearch',
        method: 'GET'
    })
}
// 搜索
export function _querySearch (params) {
    return request({
        url: 'side/search?q=' + params,
        method: 'GET'
    })
}