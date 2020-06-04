import * as React from 'react'
import './style.scss'
interface Prop {
  data: Obj[];
}
type Obj = {[k: string]: any}
const HomeAd: React.FC<Prop> = (props) => {
  const {data} = props
  return (
    <div id={"homeAdd"}>
      <h2>超级特惠</h2>
      <div className={"homeAdd-container clear-fix"}>
        {data.map((item, index) => {
          return (
            <div key={index} className="homeAdd-item float-left">
              <img src={item.img} alt=""/>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default HomeAd;