import React, { Component } from 'react';
import {Provider} from "react-redux";
import {createStore} from "redux"
import {reducer} from "../../redux/reducers"
import  CounterContainer  from "../CounterContainer/CounterContainer"
import "./app.css";

const store = createStore(reducer)
 

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <CounterContainer />
      </Provider>
    );
  }
}

export default App;
