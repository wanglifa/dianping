import {get} from '../get'
import {post} from '../post';
export function getOrderListData(userName: string) {
  return get('/api/orderlist/' + userName)
}
export function postComment(id: number, comment: string) {
  const result = post('/api/submitComment', {id, comment})
  return result
}