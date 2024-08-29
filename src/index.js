import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, { HeadLine } from './Component/App'; // Import both App and HeadLine
import RootLayout from 'layout';

ReactDOM.render(
  <RootLayout>
  <div>
    <HeadLine />
    <App />
  </div>,
  </RootLayout>,
  document.getElementById('root')
);
