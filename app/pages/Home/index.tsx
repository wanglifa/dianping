import * as React from 'react'
// import Context, {ContextProp} from '../../context/';
import {useEffect} from 'react';
import HomeHeader from '../../components/HomeHeader/'
import Category from '../../components/Category';
import Ad from './subpage/Ad';
import List from './subpage/List';

const Home: React.FC = () => {
  // const {state, dispatch} = useContext<ContextProp>(Context)
  useEffect(() => {
    // dispatch({type: SET_CITYNAME, cityName: '青岛'})
  }, [])
  return (
    <div>
      <HomeHeader/>
      <Category/>
      <Ad/>
      <List/>
    </div>
  )
}
export default Home;