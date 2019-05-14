import React, { Component } from 'react';
import Amount from './Amount';
import RenderThis from "./RenderThis";
import RenderThat from "./RenderThat"




class App extends Component {
  render() {

    return (
      < div className="App" >
        <Amount>
          {(vals, age) => (
            <div>
              <h2>{vals}</h2>
              <RenderThat name={vals} />
              <RenderThat name={age} />
            </div>
          )}


        </Amount>


      </div >
    )
  }
}



export default App
