import * as React from 'react'
// import Context, {ContextProp} from '../../context/';
import {useEffect} from 'react';
import HomeHeader from '../../components/HomeHeader/'
const Home: React.FC = () => {
  // const {state, dispatch} = useContext<ContextProp>(Context)
  useEffect(() => {
    // dispatch({type: SET_CITYNAME, cityName: '青岛'})
  }, [])
  return (
    <div>
      <HomeHeader/>
    </div>
  )
}
export default Home;