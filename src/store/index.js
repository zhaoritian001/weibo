/*
 * @Author: 赵东升
 * @Date: 2022/11/3
 */
import React from 'react'
import SearchStore from './search.Store'

class RootStore {
    constructor() {
        this.searchStore = new SearchStore()
    }
}
const rootStore = new RootStore();
const context = React.createContext(rootStore);

const useStore = () => React.useContext(context)

export { useStore}
