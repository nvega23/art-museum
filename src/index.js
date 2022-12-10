import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const Root = props => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}



ReactDOM.render(
  <React.StrictMode>
    <Root />
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);
