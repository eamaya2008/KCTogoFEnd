import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import  '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import  '../node_modules/bootstrap/dist/js/bootstrap.min.js';


ReactDOM.render(
  <React.StrictMode>
    <div className="conteiner">
      <div className="row">
        <App />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);