import * as React from 'react'
import './style.scss'
import {Link} from 'react-router-dom';
interface Prop {
  [k: string]: any;
}
const ListItem: React.FC<Prop> = (props) => {
  const {data} = props
  return (
    <div className="list-item clear-fix">
      <Link to={'/detail/' + data.id}>
        <div className="item-img-container float-left">
          <img src={data.img} alt={data.title}/>
        </div>
        <div className="item-content">
          <div className="item-title-container clear-fix">
            <h3 className="float-left">{data.title}</h3>
            <span className="float-right">{data.distance}</span>
          </div>
          <p className="item-sub-title">
            {data.subTitle}
          </p>
          <div className="item-price-container clear-fix">
            <span className="price float-left">￥{data.price}</span>
            <span className="mumber float-right">已售{data.mumber}</span>
          </div>
        </div>
      </Link>
    </div>
  )
}
export default ListItem;