import { SET_CITYNAME } from '../constants/userInfo';
export interface State {
  cityName?: string;
  username?: string;
  store?: {[k: string]: any}[];
  storeData?: {[k: string]: any};
}
export interface Action extends State{
  type: string;
}

export default {
  [SET_CITYNAME]: (state: State, action: Action) => {
    return { ...state, cityName: action.cityName }
  }
}