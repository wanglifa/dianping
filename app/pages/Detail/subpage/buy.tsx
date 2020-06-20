import * as React from 'react'
import BuyAndStore from '../../../components/BuyAndStore';
import {useEffect, useState} from 'react';
import {useContext} from 'react';
import Context, {ContextProp} from '../../../context';
import * as StoreConstants from '../../../constants/store'
import { createHashHistory } from 'history';
const history = createHashHistory()
interface Prop {
  id: string | number;
}
const Buy: React.FC<Prop> = (props) => {
  const {state, dispatch} = useContext<ContextProp>(Context)
  const [isStore, setIsStore] = useState(false)
  const buyHandle = () => {
    const loginFlag = loginCheck()
    if (!loginFlag) {
      return
    }
    history.push('/user')
  }
  const storeHandle = () => {
    const loginFlag = loginCheck()
    if (!loginFlag) {
      return
    }
    const {id} = props
    if (isStore) {
      dispatch({type: StoreConstants.STORE_RM, storeData: {id}, store: state.store})
    } else {
      dispatch({type: StoreConstants.STORE_ADD, storeData: {id}, store: state.store })
    }
    setIsStore(!isStore)
  }
  useEffect(() => {
    console.log(state.storeData, 'hhh')
  }, [state.storeData])
  const checkStoreState = () => {
    const {id} = props
    state.store?.some((item) => {
      if (item.id === id) {
        setIsStore(true)
        return true
      } else {
        return false
      }
    })
  }
  useEffect(() => {
    checkStoreState()
  }, [])
  const loginCheck = (): boolean => {
    const {id} = props
    if (!state.username) {
      history.push('/login/' + encodeURIComponent('/detail/' + id))
      return false
    }
    return true
  }
  return (
    <div>
      <BuyAndStore isStore={isStore} buyHandle={buyHandle}
        storeHandle={storeHandle}
      />
    </div>
  )
}
export default Buy;