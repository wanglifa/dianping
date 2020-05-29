import * as React from 'react'
import {ReactElement, useEffect, useReducer, useState} from 'react';
import LocalStore from '../util/localStore'
import { CITYNAME } from '../config/localStoreKey';
import Context from '../context/'
import {Reducer, reducer} from '../reducer/';
import {store} from '../store/'
import {SET_CITYNAME} from '../action/home';

interface Prop {
  children: ReactElement;
}
const App: React.FC<Prop> = (props) => {
  const [state, dispatch] = useReducer<Reducer>(reducer, store)
  const [initDone, setInitDone] = useState<boolean>(false)
  useEffect(() => {
    const intermediary = LocalStore.getItem(CITYNAME) ? LocalStore.getItem(CITYNAME) : '北京'
    dispatch({type: SET_CITYNAME, cityName: intermediary as string})
    setTimeout(() => {
      setInitDone(true)
    }, 3000)
  }, [])
  return (
    <Context.Provider value={{ state, dispatch }}>
      { initDone ? props.children : <div>加载中...</div>}
    </Context.Provider>
  )
}
export default App;