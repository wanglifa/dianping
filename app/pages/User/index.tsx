import * as React from 'react'
import Header from '../../components/Header';
import UserInfo from '../../components/userInfo';
import {useContext, useEffect} from 'react';
import Context, {ContextProp} from '../../context';
import OrderList from './subpage/OrderList';
import { createHashHistory } from 'history';
const history = createHashHistory()

const UserList: React.FC = () => {
  const {state} = useContext<ContextProp>(Context)
  const {cityName, username} = state
  useEffect(() => {
    if (!username) {
      history.push('/login')
    }
  }, [])
  return (
    <div>
      <Header title={"用户中心"} backRouter={"/"}/>
      <UserInfo cityName={cityName} userName={username}/>
      <OrderList userName={username}/>
    </div>
  )
}
export default UserList;