import * as React from 'react'
import Context, {ContextProp} from '../../context/';
import Header from '../../components/Header';
import CurrentCity from '../../components/CurrentCity';
import CityList from '../../components/CityList';
import { SET_CITYNAME } from '../../action/home'
import {useContext} from 'react';
interface Prop {
  history: History & { push: (str: string) => void};
}
const City: React.FC<Prop> = (props) => {
  const {dispatch} = useContext<ContextProp>(Context)
  const changeFn = (city: string) => {
    if (city == null) {
      return
    }
    dispatch({ type: SET_CITYNAME, cityName: city })
    props.history.push('/')
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