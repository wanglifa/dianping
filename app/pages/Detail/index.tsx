import * as React from 'react'
interface Prop {
  match: Match;
}
interface Match {
  params: { id: string | number }
}
import Header from '../../components/Header'
import Info from './subpage/info';
const Detail: React.FC<Prop> = (props) => {
  return (
    <div>
      <Header title={"商户详情"}/>
      <Info id={props.match.params.id}/>
    </div>
  )
}
export default Detail;