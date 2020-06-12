import * as React from 'react'
import './style.scss'
import SearchInput from '../SearchInput';
import {MouseEventHandler, useEffect, useState} from 'react';
import { createHashHistory } from 'history';
const history = createHashHistory()
interface Prop {
  keyword: string;
}
const SearchHeader: React.FC<Prop> = (props) => {
  const [keyword, setKeyWord] = useState('')
  useEffect(() => {
    setKeyWord(props.keyword)
  }, [props.keyword])
  const enterHandle = (path: string) => {
    history.push('/search/all/' + encodeURIComponent(path))
  }
  const onClickHandle: MouseEventHandler = (e) => {
    window.history.back()
  }
  return (
    <div id="search-header" className="clear-fix">
      <span onClick={onClickHandle} className="back-icon float-left">
        <i className="icon-chevron-left"></i>
      </span>
      <div className="input-container">
        <i className="icon-search"></i>
        &nbsp;
        <SearchInput value={keyword} enterHandle={enterHandle}/>
      </div>
    </div>
  )
}
export default SearchHeader;