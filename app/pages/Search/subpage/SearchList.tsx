import * as React from 'react'
import {useContext, useEffect, useRef, useState} from 'react';
import Context, {ContextProp} from '../../../context';
import { getListData } from '../../../fetch/home/home';
import {ObjProp} from '../../../components/HomeAd';
import ListComponent from '../../../components/List'
import LoadMore from '../../../components/LoadMore'
import '../../Home/subpage/style.scss'
interface Prop {
  keyword: string;
  category: string;
}
interface InitState {
  Data: ObjProp[];
  hasMore: boolean;
  isLoadingMore: boolean;
  page: number;
}
const SearchList: React.FC<Prop> = (props) => {
  let flag = useRef<boolean>(false)
  const inistState: InitState = {
    Data: [],
    hasMore: false,
    isLoadingMore: false,
    page: 0
  }
  const [initStateData, setInitStateData] = useState<InitState>(inistState)
  const [keyword, setKeyWord] = useState('')
  const [category, setCategory] = useState('')
  const {state} = useContext<ContextProp>(Context)
  const resultHandle = (result: Promise<Response>) => {
    result.then(res => {
      return res.json()
    }).then(json => {
      const { data, hasMore } = json
      setInitStateData({
        ...initStateData,
        Data: initStateData.Data.concat(data),
        hasMore,
        isLoadingMore: false
      })
      flag.current = false
    })
  }
  const getPageData = () => {
    const cityName = state.cityName
    const result = getListData(cityName, initStateData.page, category, keyword)
    resultHandle(result)
  }
  const loadMoreData = () => {
    setInitStateData({
      ...initStateData,
      isLoadingMore: true,
      page: initStateData.page + 1,
    })
  }
  useEffect(() => {
    getPageData()
  }, [])
  useEffect(() => {
    setKeyWord(props.keyword)
    if (keyword === props.keyword && category === props.category) {
      return
    }
    setInitStateData({...inistState})
    flag.current = true
  }, [props.keyword])
  useEffect(() => {
    setCategory(props.category)
  }, [props.category])
  useEffect(() => {
    if (initStateData.isLoadingMore) {
      getPageData()
    }
  }, [initStateData.page])
  useEffect(() => {
    if (flag.current) {
      getPageData()
    }
  }, [initStateData])
  return (
    <div>
      {initStateData.Data.length > 0 ? <ListComponent data={initStateData.Data}/> : '加载中...'}
      {initStateData.hasMore ? <LoadMore isLoadingMore={initStateData.isLoadingMore} loadMoreFn={loadMoreData}/> : <div></div>}
    </div>
  )
}
export default SearchList;