import * as React from 'react'
import {getAdData} from '../../../fetch/home/home'
import {useEffect, useState} from 'react';
import HomeAd from '../../../components/HomeAd'
const Ad: React.FC = () => {
  const [data, setData] = useState<[]>([])
  useEffect(() => {
    const result = getAdData()
    result.then(res => {
      return res.json()
    }).then((json) => {
      setData(json)
    })
  }, [])
  return (
    <div>
      {data.length > 0 ? <HomeAd data={data}/> : '加载中...'}
    </div>
  )
}
export default Ad;