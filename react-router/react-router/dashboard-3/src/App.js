import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTachometer,  faLayerPlus, faTasks, faBadgeCheck, faProjectDiagram, faUserCog, faChalkboardTeacher, faMarker} from '@fortawesome/pro-solid-svg-icons'
import './App.css';
import  NavBar from './components/NavBar';
import  DashBoardControls from './components/DashBoardControls'
import DashBoardPanelDisplay from './components/DashBoardPanelDisplay';
 

library.add(faTachometer, faLayerPlus, faProjectDiagram, faTasks, faBadgeCheck, faUserCog, faChalkboardTeacher, faMarker  );



class App extends Component {
  render() {
    return (
      <Router>
       <main>
         <NavBar/> 
         <div className="dashboard">     
            <DashBoardControls/>
            <DashBoardPanelDisplay/> 
         </div>  
      </main>  
      </Router>   
    );
  }
}

export default App;
