import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import DisplayWebsite from './DisplayWebsite';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <DisplayWebsite/>
  </BrowserRouter>
  ,document.getElementById('root')
);

