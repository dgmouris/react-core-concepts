import React, { Component } from 'react';
import { Filters } from './comp/filters';
import Plants from './comp/plants'
import './data/data';



class App extends Component {

  constructor(props) {
    super(props);

    let features = window.appdata.plants.filter(function(item){
          return (item.featured === true);
    })
    console.log(features);

    this.state = {
      plants: window.appdata.plants,
      requestedType: "",
      selectedType: "",
      itemView: features
    }

    this.updateFormState = this.updateFormState.bind(this);
 
  }
  updateFormState(name, value) {
   
    this.setState(
      {
      [name]: value
     },  this.updateView
    )

    console.log(name, value)
  }


  
  updateView(){
     console.log(this.state.RequestedType.bind(this))
  }

  render() {
    return (
      <div className="plant-directory">
        <div> <h2>Filters</h2>
          <Filters
            plants={this.state.plants}
            requestedType={this.state.requestedType}
            selectedType={this.state.selectedType}
            updateFormState={this.updateFormState}
          />
        </div>

        <div> <h2>Data Display</h2>
          <Plants plants={this.state.itemView}  />
        </div>
      </div>
    );
  }
}

export default App;
