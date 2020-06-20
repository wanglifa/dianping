import * as React from 'react'
import './style.scss'
interface Prop {
  isStore: boolean;
  buyHandle: () => void;
  storeHandle: () => void;
}
const BuyAndStore: React.FC<Prop> = (props) => {
  return (
    <div className="buy-store-container clear-fix">
      <div className="item-container float-left">
        {
          // 是否已经收藏了
          props.isStore
            ? <button className="selected" onClick={props.storeHandle}>已收藏</button>
            : <button onClick={props.storeHandle}>收藏</button>
        }
      </div>
      <div className="item-container float-right">
        <button onClick={props.buyHandle}>购买</button>
      </div>
    </div>
  )
}
export default BuyAndStore;