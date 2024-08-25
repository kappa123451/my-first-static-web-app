import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, { HeadLine } from './Component/App'; // Import both App and HeadLine

ReactDOM.render(
  <div>
    <HeadLine />
    <App />
  </div>,
  document.getElementById('root')
);
