import {State} from '../reducer/cityName';
import UserInfo from './useInfo'
import Store from './store'

export const store: State = {
  ...UserInfo,
  ...Store
}