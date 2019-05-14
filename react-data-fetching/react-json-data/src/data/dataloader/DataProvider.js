 import React, { Component } from 'react';

 const EmployeeContext = React.createContext()

 export default class DataProvider extends Component {
     constructor(props) {
         super(props);
         this.state = { 
             isLoaded:false,
             employees:null,
          };
     }

     componentDidMount() {
      let employees =null;
  fetch('https://randomuser.me/api/?results=18')
        .then(response => response.json())
        .then(data =>{
         employees= data.results.map((item)=> {
            const{name, email, phone, cell, location, picture, login} = item;
       
     
        
            const employee = {name, email, phone, cell, location, picture, login}
            return employee;
           })
           this.setState({
              employees,
              isLoaded:true
           })
        })

     }
     render() {
        return (
           
        <EmployeeContext.Provider value={this.state}>
        {this.props.children}
        </EmployeeContext.Provider>
        )
     }
 }
 export {EmployeeContext}
 