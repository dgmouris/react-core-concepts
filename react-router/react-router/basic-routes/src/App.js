import React, { Component } from "react";
import DashBoard from './components/layout/dashboard/DashBoard'
import HomePage from "./components/pages/HomePage";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
 
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Switch>
           <Route exact path="/" component={HomePage}/>
           <Route path="/dashboard" component={DashBoard}/>
           </Switch>
      </BrowserRouter>
        
     
    );
  }
}
export default App