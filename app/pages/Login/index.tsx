import * as React from 'react'
import {useEffect, useState} from 'react';
import {useContext} from 'react';
import Context, {ContextProp} from '../../context';
import {SET_USERNAME} from '../../constants/userInfo';
import {MatchProp} from '../Search';
import LoginComponent from '../../components/LoginComponent';
import Header from '../../components/Header';
import { createHashHistory } from 'history';
const history = createHashHistory()
interface Prop extends MatchProp<{router: string}>{

}
const Login: React.FC<Prop> = (props) => {
  const {state, dispatch} = useContext<ContextProp>(Context)
  const [checking, setChecking] = useState<boolean>(true)
  const doCheck = () => {
    if (state.username) {
      goUserPage()
    } else {
      setChecking(false)
    }
  }
  const goUserPage = () => {
    history.push('/user')
  }
  const loginHandle = (username: string) => {
    dispatch({ type: SET_USERNAME, username })
    const {router} = props.match.params
    console.log(router, 'router')
    if (router) {
      history.push(decodeURIComponent(router))
    } else {
      goUserPage()
    }
  }
  useEffect(() => {
    doCheck()
  }, [])
  return (
    <div>
      <Header title={"登录"}/>
      {checking ? '等待中' : <LoginComponent loginHandle={loginHandle}/>}
    </div>
  )
}
export default Login;