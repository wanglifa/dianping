import { get } from '../get'
export function getInfoData(id: number | string): Promise<Response> {
  const result = get('/api/detail/info/' + id)
  return result
}
export function getCommentData(page: string | number, id: string | number): Promise<Response> {
  const result = get('/api/detail/comment/' + page + '/' + id)
  return result
}