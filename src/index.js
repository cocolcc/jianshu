import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
require('./style.css');
require('./statics/iconfont/iconfont.css');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
