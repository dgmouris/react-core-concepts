import React, { Component } from 'react';

// 
// Question what is the difference between {} and not using it.
// purpose of export default.
//

// import logo from './logo.svg';
import './app.css';
import Gallery from './gallery/gallery'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Gallery/>    
      </div>
    );
  }
}

export default App;
