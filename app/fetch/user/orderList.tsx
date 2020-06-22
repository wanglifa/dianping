import {get} from '../get'
export function getOrderListData(userName: string) {
  return get('/api/orderlist/' + userName)
}