import React, { Component } from 'react';
import DataProvider from './data/dataloader/DataProvider'
  import Employees from "./components/emloyees/Employees";
import './css/style.css';


 

class App extends Component {
 
    
  render() {
    return (
      <div className="app">
    
        <DataProvider>
         <Employees/>
        </DataProvider>
 
      </div>
    )
  }
}
 

export default App 