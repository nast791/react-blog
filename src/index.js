import React from 'react';
import ReactDOM from 'react-dom';
import './fonts.css';
import GlobalStyle from "./globalStyle";
import App from './app/App';
import {BrowserRouter} from "react-router-dom";

const app = (
  <BrowserRouter basename={ location.hostname === 'localhost' ? '/' : '/react-blog' }>
    <App/>
    <GlobalStyle />
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));