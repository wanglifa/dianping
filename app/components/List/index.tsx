import * as React from 'react'
import {ArrayObjProp} from '../HomeAd';
import ListItem from './Item';
interface Prop extends ArrayObjProp{

}
const List: React.FC<Prop> = (props) => {
  const {data} = props
  return (
    <div>
      {data.map((item, index) => {
        return (
         <ListItem key={index} data={item}/>
        )
      })}
    </div>
  )
}
export default List;