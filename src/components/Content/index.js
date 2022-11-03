/*
 * @Author: 赵东升
 * @Date: 2022/11/3
 */

import {useEffect, useState} from "react";
import { useStore} from "../../store";
import { Card } from "antd";
import { observer } from "mobx-react-lite";
import content from './index.module.css'

const ContentPage = () => {
    // const [ hot, setHot ] = useState([])
    const { searchStore } = useStore()
    useEffect( () => {
        searchStore.hotSearch()
    }, [])
    return(
        <div style={{ display: 'flex'}}>
            <div style={{ width: '300px'}}>123</div>
            <div style={{ flex: 1}}>456</div>
            <div>
                <Card
                    headStyle={content.cardStyle}
                    bordered={false}
                    style={{ width: 300 }}
                    cover={
                        <div className={content.leftHeader}>
                            <div className={content.text} />
                            <div style={{color: '#ff8200', fontSize: '20px', marginTop: '20px'}}>新闻热搜</div>
                        </div>
                    }>
                    {
                        searchStore.hotList.map((item, index) =>
                            index <= 20 &&
                            <div className={content.listItem} key={ index }>
                                <div style={{ width: '50px' }} className={index <= 2 ? 'content.qiansan' : 'content.other'} > { index + 1 } #{ item.word }#</div>
                                { item.icon_desc === '沸' ? <div className={content.fei}> 沸 </div> : '' }
                                { item.icon_desc === '新' ? <div className={content.new}> 新 </div> : '' }
                            </div>
                        )
                    }
                </Card>
            </div>
        </div>
    )
}

export default observer(ContentPage)