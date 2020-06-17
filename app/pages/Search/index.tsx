import * as React from 'react'
import SearchHeader from '../../components/SearchHeader';
import {useEffect, useState} from 'react';
import SearchList from './subpage/SearchList';
export interface MatchProp<T> {
  match: {[k: string]: T};
}
const Search: React.FC<MatchProp<{keyword: string, category: string}>> = (props) => {
  const [keyword, setKeyWord] = useState('')
  const [category, setCategory] = useState('')
  useEffect(() => {
    setKeyWord(props.match.params.keyword)
    setCategory(props.match.params.category)
  })
  useEffect(() => {
    console.log(keyword, 'kkkk')
  }, [keyword])
  return (
    <div>
      <SearchHeader keyword={keyword}/>
      <SearchList keyword={keyword} category={category}/>
    </div>
  )
}
export default Search;