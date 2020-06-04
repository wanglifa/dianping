import * as React from 'react'
import {useContext, useEffect, useState} from 'react';
import Context, {ContextProp} from '../../../context';
import { getListData } from '../../../fetch/home/home';
import {ObjProp} from '../../../components/HomeAd';
import ListComponent from '../../../components/List'
import './style.scss'
const List: React.FC = () => {
  const {state} = useContext<ContextProp>(Context)
  const [data, setData] = useState<ObjProp[]>([])
  const [hasMore, setHasMore] = useState<boolean>(false)
  const loadFirstPageData = () => {
    const cityName = state.cityName
    const result = getListData(cityName, 0)
    resultHandle(result)
  }
  const resultHandle = (result: Promise<Response>) => {
    result.then(res => {
      return res.json()
    }).then(json => {
      const { data, hasMore } = json
      setData(data)
      setHasMore(hasMore)
    })
  }
  useEffect(() => {
    loadFirstPageData()
  }, [])
  return (
    <div>
      <h2 className={"home-list-title"}>猜你喜欢</h2>
      {data.length > 0 ? <ListComponent data={data}/> : '加载中...'}
    </div>
  )
}
export default List;