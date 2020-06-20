import * as React from 'react'
import Context, {ContextProp} from '../../context/';
import Header from '../../components/Header';
import CurrentCity from '../../components/CurrentCity';
import CityList from '../../components/CityList';
import { SET_CITYNAME } from '../../constants/userInfo'
import {useContext} from 'react';
export interface HistoryProp {
  history?: History & { push: (str: string) => void};
}
const City: React.FC<HistoryProp> = (props) => {
  const {dispatch} = useContext<ContextProp>(Context)
  const changeFn = (city: string) => {
    if (city == null) {
      return
    }
    dispatch({ type: SET_CITYNAME, cityName: city })
    console.log(props.history, 'aaahi')
    props.history!.push('/')
  }
  return (
    <div>
      <Header title={"选择城市"}/>
      <CurrentCity/>
      <CityList changeFn={changeFn}/>
    </div>
  )
}
export default City;