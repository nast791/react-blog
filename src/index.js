import React from 'react';
import ReactDOM from 'react-dom';
import './fonts.css';
import GlobalStyle from "./globalStyle";
import App from './app/App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux';
import {store} from "./app/store/store";

const app = (
  <Provider store={store}>
    <BrowserRouter basename={ location.hostname === 'localhost' ? '/' : '/react-blog' }>
      <App/>
      <GlobalStyle />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));