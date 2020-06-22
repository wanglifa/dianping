import * as React from 'react'
import Header from '../../components/Header';
import UserInfo from '../../components/userInfo';
import {useContext} from 'react';
import Context, {ContextProp} from '../../context';

const UserList: React.FC = () => {
  const {state} = useContext<ContextProp>(Context)
  const {cityName, username} = state
  return (
    <div>
      <Header title={"用户中心"} backRouter={"/"}/>
      <UserInfo cityName={cityName} userName={username}/>
    </div>
  )
}
export default UserList;