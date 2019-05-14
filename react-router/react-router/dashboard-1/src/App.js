import React, { Component } from 'react';
import {BrowserRouter as Router } from 'react-router-dom';
import DashBoard from './components/DashBoard'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router> 
        <DashBoard/>
      </Router>
    );
  }
}

export default App;
