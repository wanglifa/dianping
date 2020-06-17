import * as React from 'react'
import {useContext, useEffect, useState} from 'react';
import Context, {ContextProp} from '../../../context';
import { getListData } from '../../../fetch/home/home';
import {ObjProp} from '../../../components/HomeAd';
import ListComponent from '../../../components/List'
import LoadMore from '../../../components/LoadMore'
import './style.scss'
const List: React.FC = () => {
  const {state} = useContext<ContextProp>(Context)
  const [Data, setData] = useState<ObjProp[]>([])
  // 是否还有更多数据
  const [hasMore, setHasMore] = useState<boolean>(false)
  // 记录当前状态，是加载中...，还是点击加载更多
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false)
  // 下一页的页码，首页的页码是0
  const [page, setPage] = useState<number>(0)
  const resultHandle = (result: Promise<Response>) => {
    result.then(res => {
      return res.json()
    }).then(json => {
      const { data, hasMore } = json
      setData(Data.concat(data))
      setHasMore(hasMore)
    })
  }
  const getPageData = () => {
    const cityName = state.cityName
    const result = getListData(cityName!, page)
    resultHandle(result)
  }
  const loadMoreData = () => {
    setIsLoadingMore(true)
    setPage(page => page + 1)
    setIsLoadingMore(false)
  }
  useEffect(() => {
    getPageData()
  }, [])
  useEffect(() => {
    if (isLoadingMore) {
      getPageData()
    }
  }, [page])
  return (
    <div>
      <h2 className={"home-list-title"}>猜你喜欢</h2>
      {Data.length > 0 ? <ListComponent data={Data}/> : '加载中...'}
      {hasMore ? <LoadMore isLoadingMore={isLoadingMore} loadMoreFn={loadMoreData}/> : <div></div>}
    </div>
  )
}
export default List;