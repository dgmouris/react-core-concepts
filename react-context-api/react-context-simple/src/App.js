import React, { Component } from 'react';
import DrillerOne from './components/propdriller/Driller';
import ContextOne from './components/context-api/ContextOne'
class App extends Component {
  render() {
    return (
      <div className="helper">
         <DrillerOne/>  
         <ContextOne/>
      </div>
    );
  }
}

export default App;
