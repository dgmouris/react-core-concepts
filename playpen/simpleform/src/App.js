import React, { Component } from 'react';
import ClassRoom from './students/classroom';
import './css/reboot.css'
 
 

class App extends Component {
  render() {
    return (
      <div className="App">
          <ClassRoom/>
      </div>
    );
  }
}

export default App;
