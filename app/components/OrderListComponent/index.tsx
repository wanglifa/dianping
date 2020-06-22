import * as React from 'react'
import './style.scss'
import OrderListItem from './Item';
interface Prop {
  data: {[k: string]: any}[];
}
const OrderListComponent: React.FC<Prop> = (props) => {
  return (
    <div>
      {
        props.data?.map((item, index) => {
          return <OrderListItem key={index} data={item}/>
        })
      }
    </div>
  )
}
export default OrderListComponent;