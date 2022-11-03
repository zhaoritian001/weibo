/*
 * @Author: 赵东升
 * @Date: 2022/11/3
 */
import header from './index.module.css'
import { Input } from 'antd';
import { useStore } from '../../store/index'
import { urlencode } from "../../utils";

const { Search } = Input;

const HeaderPage = () => {
    const { searchStore } = useStore()
    const onSearch = (value) => {
        searchStore.querySearch(urlencode(value))
        console.log('urlencode(value)', {q: urlencode(value)});
    }

    return (
        <div className={header.box}>
            <video style={{width: '100%'}} muted autoPlay loop src="https://a.sinaimg.cn/mintra/pic/2112130543/weibo_login.mp4"/>
            <div className={header.content}>
                <div className={header.contentTitle}>web</div>
                <div className={header.contentSearch}>
                    <Search
                        className={header.contentInput}
                        placeholder="搜索"
                        allowClear
                        enterButton="Search"
                        size="large"
                        onSearch={onSearch}
                    />
                </div>
            </div>
        </div>
    )
}

export default HeaderPage