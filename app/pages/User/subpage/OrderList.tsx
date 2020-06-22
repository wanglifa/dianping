import * as React from 'react'
import {useEffect, useState} from 'react';
import {getOrderListData} from '../../../fetch/user/orderList';
import OrderListComponent from '../../../components/OrderListComponent';
import './style.scss'
interface Prop {
  userName?: string;
}
const OrderList: React.FC<Prop> = (props) => {
  const [data, setData] = useState([])
  const loadOrderList = (username: string) => {
    const result = getOrderListData(props.userName!)
    result.then(res => {
      return res.json()
    }).then(json => {
      setData(json)
    })
  }
  useEffect(() => {
    if (props.userName) {
      loadOrderList(props.userName)
    }
  }, [])
  return (
    <div className={"order-list-container"}>
      <h2>你的订单</h2>
      {
        data.length ?
          <OrderListComponent data={data}/>
          : null
      }
    </div>
  )
}
export default OrderList;