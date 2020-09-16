import React, { Component } from 'react';
import Sidebar from './components/Sidebar'; 
import { Provider } from 'react-redux';
import store from './store';


class App extends Component {
  render(){
    return(
      <Provider store={store}>
        <Sidebar/>
      </Provider>
      );
  }
 

}

export default App;
