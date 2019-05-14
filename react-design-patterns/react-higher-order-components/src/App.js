import React, { Component } from 'react';
import WrappedComponent from './components/higher/WrappedComponent';
import './css/style.css';
 
 


 

class App extends Component {
 
    
  render() {
    return (
      <div className="app">
       <h1>Hello There Jim</h1>
        <WrappedComponent/> 
      </div>
    )
  }
}
 

export default App 