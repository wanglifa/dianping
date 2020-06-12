import * as React from 'react'
import './style.scss'
import {ChangeEventHandler, useEffect, useState} from 'react';
import {KeyboardEventHandler} from 'react';
interface Prop {
  value: string;
  enterHandle: (path: string) => void;
}
const SearchInput: React.FC<Prop> = (props) => {
  const [value, setValue] = useState('')
  useEffect(() => {
    setValue(props.value)
  }, [props.value])
  const onChangeHandle: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value)
  }
  const onKeyUpHandle: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.keyCode !== 13) {
      return
    }
    props.enterHandle(value)
  }
  return (
    <input type="text" className={"search-input"} placeholder={"请输入关键字"}
      value={value}
           onChange={onChangeHandle}
           onKeyUp={onKeyUpHandle}
    />
  )
}
export default SearchInput;