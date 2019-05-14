import React, {Component} from 'react';
 
 const NavStyler ={
    backgroundColor:"grey",  height:"65px", position:"fixed", width:"100%"

 }

class TopBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
          
            <nav style={NavStyler}>
            <h1>Top Bar Menu</h1>           
            </nav>
            
         );
    }
}
 
export default TopBar;