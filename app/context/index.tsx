import {createContext, Dispatch} from 'react';
import {Action, State} from '../reducer/cityName';
export interface ContextProp {
  state: State;
  dispatch: Dispatch<Action>;
}
const initValue: ContextProp = {
  state: {cityName: ''},
  dispatch: () => {},
}
const Context = createContext<ContextProp>(initValue)
export default Context