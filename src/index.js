import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import { Provider } from 'react-redux';
import store from './store';

import  '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import  '../node_modules/bootstrap/dist/js/bootstrap.min.js';


ReactDOM.render(
  <React.StrictMode>
    <div className="conteiner">
      <div className="row">
        <Provider store={store}>
          <Main />
        </Provider>      
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);