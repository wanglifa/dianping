import * as React from 'react'
import './style.scss'
import {useEffect, useRef} from 'react';
interface Prop {
  isLoadingMore: boolean;
  loadMoreFn: () => void;
}
const LoadMore: React.FC<Prop> = (props) => {
  let timer: number | null = null
  const loadRef = useRef<HTMLDivElement>(null)
  const scrollBottomGetData = () => {
    // 当前加载更多文字距可视窗口顶部的位置
    const top = loadRef.current!.getBoundingClientRect().top
    // 窗口的高度
    const windowH = window.screen.height
    // 如果小于窗口的高度，说明进入可视范围内了，也就是到底了
    if (top && top < windowH) {
      props.loadMoreFn()
    }
  }
  const onScroll = () => {
    if (props.isLoadingMore) {
      return
    }
    if (timer) {
      window.clearTimeout(timer)
    }
    timer = window.setTimeout(scrollBottomGetData, 500)
  }
  useEffect(() => {
    document.addEventListener('scroll', onScroll)
    return () => {
      document.removeEventListener('scroll', onScroll)
    }
  }, [])
  return (
    <div className={"load-more"} ref={loadRef}>
      {
        props.isLoadingMore ? <span>加载中...</span>
          : <span>加载更多</span>
      }
    </div>
  )
}
export default LoadMore;