import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

// import Main from './components/main/Main.js';
import App from './App.js'
import { Provider } from 'react-redux';
import store from './redux/store';

import  '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import  '../node_modules/bootstrap/dist/js/bootstrap.min.js';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <BrowserRouter basename="/">
            <App />
        </BrowserRouter>
    </Provider>     
  </React.StrictMode>,
  document.getElementById('root')
);