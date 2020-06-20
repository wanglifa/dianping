import * as React from 'react'
interface Prop {
  match: Match;
}
interface Match {
  params: { id: string | number }
}
import Header from '../../components/Header'
import Info from './subpage/info';
import Comment from './subpage/Comment'
import Buy from './subpage/buy';
const Detail: React.FC<Prop> = (props) => {
  const {id} = props.match.params
  return (
    <div>
      <Header title={"商户详情"}/>
      <Info id={id}/>
      <Buy id={id}/>
      <Comment id={id}/>
    </div>
  )
}
export default Detail;