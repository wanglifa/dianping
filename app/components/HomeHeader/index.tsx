import * as React from 'react'
import './style.scss'
import {useContext} from 'react';
import Context, {ContextProp} from '../../context';
import { Link } from 'react-router-dom'
import { createHashHistory } from 'history';
import SearchInput from '../SearchInput';
const history = createHashHistory()

const HomeHeader: React.FC = () => {
  const {state} = useContext<ContextProp>(Context)
  const enterHandle = (path: string) => {
    history.push('/search/all/' + encodeURIComponent(path))
  }
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
        <Link to={"/Login"}>
          <i className="icon-user"></i>
        </Link>
      </div>
      <div className={"home-header-middle"}>
        <div className="search-container">
          <i className="icon-search"></i>
          <SearchInput value={""} enterHandle={enterHandle}/>
        </div>
      </div>
    </div>
  )
}
export default HomeHeader;
