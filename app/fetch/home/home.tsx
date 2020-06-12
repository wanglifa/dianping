import { get } from '../get'

export function getAdData() {
    const result = get('/api/homead')
    return result
}

export function getListData(city: string, page: string | number, category?: string, keyword?: string) {
    const result = get('/api/homelist/' + encodeURIComponent(city) + '/' + page)
    return result
}