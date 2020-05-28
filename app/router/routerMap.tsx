import * as React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from '../pages/Home';
import List from '../pages/List';
import Detail from '../pages/Detail';

const RouterMap: React.FC = () => {
  return (
    <Router basename={"/"}>
      <Route path={"/"} component={Home} exact/>
      <Route path={"/list"} component={List} exact/>
      <Route path={"/detail/:id"} component={Detail} exact/>
    </Router>
  )
}
export default RouterMap