import * as React from 'react'
import './style.scss'
import OrderListItem from './Item';
export type SubmitComment = (id: number, value: string, callback: () => void) => void
interface Prop {
  data: {[k: string]: any}[];
  submitComment: SubmitComment;
}
const OrderListComponent: React.FC<Prop> = (props) => {
  return (
    <div>
      {
        props.data?.map((item, index) => {
          return <OrderListItem key={index} data={item} submitComment={props.submitComment}/>
        })
      }
    </div>
  )
}
export default OrderListComponent;