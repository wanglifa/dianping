import * as React from 'react'
import './style.scss'
import {useEffect, useState} from 'react';
interface CityListProp {
  changeFn: (city: string) => void;
}
const CityList: React.FC<CityListProp> = (props) => {
  const [hotCityList, setHotCityList] = useState<string[]>([])
  useEffect(() => {
    const citys = ['北京', '上海', '杭州', '广州', '苏州', '深圳', '南京',
      '天津', '重庆', '厦门', '武汉', '西安'
    ]
    setHotCityList(citys)
  }, [])
  return (
    <div className={"city-list-container"}>
      <h3>热门城市</h3>
      <ul className="clear-fix">
        {hotCityList.map(item => {
          return (
            <li key={item}>
              <span onClick={()=> {props.changeFn(item)}}>{item}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default CityList;