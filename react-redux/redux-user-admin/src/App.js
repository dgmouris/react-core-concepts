import React, { Component } from 'react';
import NavBar from './components/navbar/NavBar'
import Users from './container/users/Users'// 

import {Provider} from 'react-redux';
import store from "./redux/store/store"

class App extends Component {
  render() {
 
    return (
      <Provider store={store}>
        <NavBar></NavBar>
        <div className="jumbotron">
                <h1 className="h1 text-center">User Admin Redux</h1>
        </div>
        <Users/>
      </Provider>
  
    );
  }
}

export default App;
