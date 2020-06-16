import * as React from 'react'
import './style.scss'
interface Prop {
  star: number;
}
const Star: React.FC<Prop> = (props) => {
  let {star} = props || 0
  if (star > 5) {
    star = star % 5
  }
  return (
    <div className="star-container">
      {[1,2,3,4,5].map((item, index) => {
        const lightClass = star >= item ? 'light' : ''
        return <i key={index} className={`icon-star ${lightClass}`}></i>
      })}
    </div>
  )
}
export default Star;