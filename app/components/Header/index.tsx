import * as React from 'react'
import './style.scss'
import { createHashHistory } from 'history';
const history = createHashHistory()
interface Prop {
  title: string;
  backRouter?: string;
}
const Header: React.FC<Prop> = (props) => {
  const onClickReturn = () => {
    if (props.backRouter) {
      history.push(props.backRouter)
    } else {
      window.history.back()
    }
  }
  return (
    <div id={"common-header"}>
      <span onClick={onClickReturn} className={"back-icon"}>
        <i className="icon-chevron-left"></i>
      </span>
      <h1>{props.title}</h1>
    </div>
  )
}
export default Header;