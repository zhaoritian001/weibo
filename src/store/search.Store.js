/*
 * @Author: 赵东升
 * @Date: 2022/11/3
 */

import {makeAutoObservable} from "mobx";
import {_hotSearch, _querySearch} from "../api";

class SearchStore {
    hotList = []
    constructor() {
        makeAutoObservable(this)
    }

    querySearch = async (query) => {
        const res = await _querySearch(query)
    }

    hotSearch = () => {
        _hotSearch().then(res => {
            const { realtime } = res.data
            this.hotList = realtime
            console.log('@@@@@@@@########', this.hotList);
        })
    }

}

export default SearchStore