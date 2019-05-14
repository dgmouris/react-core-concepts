import React, { Component } from 'react';
import { Provider } from "react-redux";
import store from './redux/store'

 
import Display from "./components/Display.jsx"


class App extends Component {
  render() {
    return (
       
        <Provider store={store}>
        <header className="jumbotron display-3 text-center text-danger">
          <h2> React dsfsdfRedux Easy</h2>
        </header >
          <Display/>
        </Provider>
   
    );
  }
}

export default App;
