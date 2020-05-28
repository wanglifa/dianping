import * as React from 'react'
interface Prop {
  match: Match;
}
interface Match {
  params: { id: string | number }
}
const Detail: React.FC<Prop> = (props) => {
  return (
    <div>
      <div>detail</div>
      <div>参数: {props.match.params.id}</div>
    </div>
  )
}
export default Detail;