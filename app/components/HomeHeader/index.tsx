import * as React from 'react'
const HomeHeader: React.FC = () => {
  return (
    <div className={"clear-fix"}>
      <div className="float-left">
        深圳
        <i className={"icon-angle-down"}></i>
      </div>
      <div className="float-right">
        <i className="icon-user"></i>
      </div>
      <div>
        <i className="icon-search"></i>
        <input/>
      </div>
    </div>
  )
}
export default HomeHeader;
