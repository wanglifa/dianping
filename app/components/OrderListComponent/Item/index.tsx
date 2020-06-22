import * as React from 'react'
import './style.scss'
interface Prop {
  data: {[k: string]: any};
}
const OrderListItem: React.FC<Prop> = (props) => {
  const {data} = props
  return (
    <div className="clear-fix order-item-container">
      <div className="order-item-img float-left">
        <img src={data.img}/>
      </div>
      <div className="order-item-comment float-right">
        <button>评价</button>
      </div>
      <div className="order-item-content">
        <span>商户：{data.title}</span>
        <span>数量：{data.count}</span>
        <span>价格：￥{data.price}</span>
      </div>
    </div>
  )
}
export default OrderListItem;