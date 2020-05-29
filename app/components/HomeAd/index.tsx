import * as React from 'react'
interface Prop {
  data: Obj[];
}
type Obj = {[k: string]: any}
const HomeAd: React.FC<Prop> = (props) => {
  const {data} = props
  return (
    <div>
      <h2>超级特惠</h2>
      <div>
        {data.map((item, index) => {
          return (
            <div key={index}>
              <a href={item.link}>
                <img src={item.img} alt="" style={{width: '100px'}}/>
              </a>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default HomeAd;