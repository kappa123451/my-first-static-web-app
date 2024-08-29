import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RootLayout from './Layout'; // Ensure casing matches the actual file name
import App, { HeadLine } from './Component/App';

ReactDOM.render(
  <RootLayout>
    <HeadLine />
    <App />
  </RootLayout>,
  document.getElementById('root')
);
