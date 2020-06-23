import * as React from 'react'
import './style.scss'
import {useEffect, useRef, useState} from 'react';
import {MouseEventHandler} from 'react';
import {SubmitComment} from '../index';
interface Prop {
  data: {[k: string]: any};
  submitComment: SubmitComment;
}
const OrderListItem: React.FC<Prop> = (props) => {
  const {data} = props
  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  const [commentState, setCommentState] = useState(0)
  const onClickEvaluate: MouseEventHandler = () => {
    setCommentState(1)
  }
  const onClickCancel: MouseEventHandler = () => {
    setCommentState(0)
  }
  const onClickSubmit: MouseEventHandler = () => {
    props.submitComment(data.id, textAreaRef.current!.value.trim(), commentOk)
  }
  const commentOk = () => {
    setCommentState(2)
  }
  useEffect(() => {
    setCommentState(data.commentState)
  }, [])
  return (
    <div className="order-item-container">
      <div className="clear-fix">
        <div className="order-item-img float-left">
          <img src={data.img}/>
        </div>
        <div className="order-item-comment float-right">
          {
            commentState === 0 ?
              <button className={"btn"} onClick={onClickEvaluate}>评价</button>
              : commentState === 1
              ? ''
              : <button className={"btn unseleted-btn"}>已评价</button>
          }
        </div>
        <div className="order-item-content">
          <span>商户：{data.title}</span>
          <span>数量：{data.count}</span>
          <span>价格：￥{data.price}</span>
        </div>
        {
          commentState === 1
            ? <div className={"comment-text-container"}>
              <textarea style={{width: '100%', height: '80px'}} className="comment-text" ref={textAreaRef}></textarea>
                <button onClick={onClickSubmit} className={"btn"}>提交</button>
                &nbsp;
                <button onClick={onClickCancel} className={"btn unseleted-btn"}>取消</button>
              </div>
            : ''
        }
      </div>
    </div>
  )
}
export default OrderListItem;