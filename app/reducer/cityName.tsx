import { SET_CITYNAME } from '../action';
export interface State {
  cityName?: string;
  username?: string;
}
export interface Action extends State{
  type: string;
}

export default {
  [SET_CITYNAME]: (state: State, action: Action) => {
    return { ...state, cityName: action.cityName }
  }
}