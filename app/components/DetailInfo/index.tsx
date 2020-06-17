import * as React from 'react'
import './style.scss'
import Star from '../Star';
interface Prop<T> {
  data: boolean | T;
}
interface DataProp {
  img: string;
  title: string;
  star: number | string;
  price: number | string;
  subTitle: string;
  desc: string;
}
const DetailInfo: React.FC<Prop<DataProp>> = (props) => {
  const {data} = props
  return (
    <div>
      {
        typeof data === "object" ?
          <div id={"detail-info-container"}>
            <div className="info-container clear-fix">
              <div className="info-img-container float-left">
                <img src={data.img}/>
              </div>
              <div className="info-content">
                <h1>{data.title}</h1>
                <div className="star-container">
                  <Star star={Number(data.star)}/>
                  <span className="price">￥{data.price}</span>
                </div>
                <p className="sub-title">{data.subTitle}</p>
              </div>
            </div>
            {/* 设置 innerHTML */}
            <p dangerouslySetInnerHTML={{__html: data.desc}} className="info-desc"></p>
          </div> : null
      }
    </div>
  )
}
export default DetailInfo;