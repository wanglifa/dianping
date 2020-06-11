import * as React from 'react'
import './style.scss'
interface Prop {
  title: string;
}
const Header: React.FC<Prop> = (props) => {
  const onClickReturn = () => {
    window.history.back()
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