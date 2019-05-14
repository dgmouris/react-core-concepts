import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons'
import Anima from './components/Anima';
import './css/animation.css'
library.add(faArrowAltCircleDown)
 
 

 

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        Favorite Food: 
          </header>
           <Anima/>
      </div>
    );
  }
}

export default App;
