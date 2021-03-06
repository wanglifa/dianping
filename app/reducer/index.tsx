import cityNameReducer, {Action, State} from './cityName';
import userNameReducer from './userName'
import storeReducer from './store'
interface ObjProp {
  [k: string]: any;
}
const obj: ObjProp = {
  ...cityNameReducer,
  ...userNameReducer,
  ...storeReducer
}
export type Reducer = (state: State, action: Action) => State
export const reducer: Reducer = (state, action) => {
  const fn = obj[action.type]
  if (fn) {
    return fn(state, action)
  } else {
    throw new Error()
  }
}
