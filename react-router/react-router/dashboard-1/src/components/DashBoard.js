import React, {Component} from 'react';
import {Route} from 'react-router-dom'
import TopBar from './TopBar';
import SideBar from './SideBar';
import Main from './Main';
 

 
const dashBoardContainer ={
    display:"flex"
}
 
 

class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
              <TopBar/>
              <div style={dashBoardContainer}>              
              <SideBar headerText="Dashboard Sidebar" /> 
              <Main   headerText="Main Panel Content Container"/> 
              </div>
            </div>
         );
    }
}
 
export default DashBoard;