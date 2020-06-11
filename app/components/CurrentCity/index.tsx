import * as React from 'react'
import './style.scss'
import {useContext} from 'react';
import Context, {ContextProp} from '../../context';
const CurrentCity: React.FC = () => {
  const {state} = useContext<ContextProp>(Context)
  return (
    <div className={"current-city"}>
      <h2>{state.cityName}</h2>
    </div>
  )
}
export default CurrentCity;