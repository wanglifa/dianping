import * as actionTypes from '../constants/store'
import {Action, State} from './cityName';

export default {
  [actionTypes.STORE_UPDATE]: (state: State, action: Action) => {
    return { ...state, store: action.store }
  },
  [actionTypes.STORE_ADD]: (state: State, action: Action) => {
    const copyStore: {[k: string]: any}[] = JSON.parse(JSON.stringify(action.store))
    copyStore.unshift(action.storeData!)
    return { ...state, store: copyStore, storeData: action.storeData }
  },
  [actionTypes.STORE_RM]: (state: State, action: Action) => {
    const copyStore: {[k: string]: any}[] = JSON.parse(JSON.stringify(action.store))
    const filterCopyStore = copyStore?.filter(item => {
      return item.id !== action.storeData?.id
    })
    return { ...state, store: filterCopyStore, storeData: action.storeData }
  },
  [actionTypes.STORE_DATA_PARAMS]: (state: State, action: Action) => {
    return { ...state, storeData: action.storeData }
  }
}