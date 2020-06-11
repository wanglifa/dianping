import * as React from 'react'
import './style.scss'
import {useContext, useEffect} from 'react';
import Context, {ContextProp} from '../../context';
import { Link } from 'react-router-dom'
const HomeHeader: React.FC = () => {
  const {state} = useContext<ContextProp>(Context)
  useEffect(() => {
    setTimeout(() => {
      console.log(state.cityName)
    }, 3000)
  }, [])
  return (
    <div className={"clear-fix"} id={"home-header"}>
      <div className="float-left home-header-left">
        <Link to={"/city"}>
          <span>{state.cityName}</span>
        </Link>
        &nbsp;
        <i className={"icon-angle-down"}></i>
      </div>
      <div className="float-right home-header-right">
        <i className="icon-user"></i>
      </div>
      <div className={"home-header-middle"}>
        <div className="search-container">
          <i className="icon-search"></i>
          <input type="text" placeholder={"请输入关键字"}/>
        </div>
      </div>
    </div>
  )
}
export default HomeHeader;
