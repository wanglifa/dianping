import * as React from 'react'
import './style.scss'
interface Prop {
  cityName?: string;
  userName?: string;
}
const UserInfo: React.FC<Prop> = (props) => {
  return (
    <div className="userinfo-container">
      <p>
        <i className="icon-user"></i>
        {props.userName}
      </p>
      <p>
        <i className="icon-map-marker"></i>
        {props.cityName}
      </p>
    </div>
  )
}
export default UserInfo;