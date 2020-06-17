import * as React from 'react'
import './style.scss'
import {ChangeEventHandler, useRef, useState} from 'react';
interface Prop {
  loginHandle: (usename: string) => void;
}

const LoginComponent: React.FC<Prop> = (props) => {
  const [phone, setPhone] = useState('')
  const [code, setCode] = useState('')
  const [text, setText] = useState<string | number>('发送验证码')
  const canClick = useRef<boolean>(false)
  let timer: number | null = null
  const onChangePhone: ChangeEventHandler<HTMLInputElement> = (e) => {
    setPhone(e.target.value)
  }
  const onChangeCode: ChangeEventHandler<HTMLInputElement> = (e) => {
    setCode(e.target.value)
  }
  const onClickValidator = () => {
    if (canClick.current) {
      return
    }
    canClick.current = true
    if (!phone) {
      console.log('请输入手机号')
      canClick.current = false
    } else {
      let count: string | number = 60
      timer = window.setInterval(() => {
        console.log(count, 'cunt')
        if (count < 0) {
          count = '输入验证码'
          window.clearInterval(timer as number)
          canClick.current = false
        }
        setText(count)
        if (typeof count === 'number') {
          count = count - 1
        }
      }, 1000)
    }
  }
  const onClickLogin = () => {
    if (phone && code) {
      props.loginHandle(phone)
    }
  }
  return (
    <div id="login-container">
      <div className="input-container phone-container">
        <i className="icon-tablet"></i>
        <input
          type="text"
          placeholder="输入手机号"
          onChange={onChangePhone}
          value={phone}
        />
      </div>
      <div className="input-container password-container">
        <i className="icon-key"></i>
        <button onClick={onClickValidator} className={canClick.current ? 'noActive' : ''}>{text}</button>
        <input type="text" placeholder="输入验证码" value={code} onChange={onChangeCode}/>
      </div>
      <button className="btn-login" onClick={onClickLogin}>登录</button>
    </div>
  )
}
export default LoginComponent;