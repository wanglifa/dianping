import * as React from 'react'
import { Link } from 'react-router-dom'
const List: React.FC = () => {
  return (
    <div>
      <div>List</div>
      <Link to={"/detail/1"}>jump to 1</Link>
      <Link to={"/detail/2"}>jump to 2</Link>
      <Link to={"/detail/3"}>jump to 3</Link>
    </div>
  )
}
export default List;