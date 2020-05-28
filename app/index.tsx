// @ts-ignore
import React from 'react';
// @ts-ignore
import ReactDOM from 'react-dom';
// @ts-ignore
import RouterMap from './router/routerMap';
import App from './pages/';
import './static/css/common.scss'
import './static/css/font.css'

ReactDOM.render(
  <App>
    <RouterMap/>
  </App>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

