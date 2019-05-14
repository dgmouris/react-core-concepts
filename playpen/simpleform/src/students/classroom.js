import React, {Component} from 'react';
import StudentList from './student-list';
import '../data/data';
 

class ClassRoom extends Component{
     
    constructor(props) {      
        
        
        super(props); 
        
        this.state ={
            students: window.appdata.students
        }

        
    }



   render( ){
       return <StudentList identity={this.state.students}/>
   }
}

export default   ClassRoom;