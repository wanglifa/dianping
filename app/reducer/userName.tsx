import { SET_USERNAME } from '../action';
import {Action, State} from './cityName';
export default {
  [SET_USERNAME]: (state: State, action: Action) => {
    return { ...state, username: action.username }
  }
}