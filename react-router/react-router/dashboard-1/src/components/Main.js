import React, { Component} from 'react';
 

const mainPageStyles={
     width:"calc( 100% - 320px )", height:"100vh", position:"absolute", top:"65px", left:"320px"
}

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div style={mainPageStyles}>
                 <h1>{this.props.headerText}</h1>
            </div>
         );
    }
}
 
export default Main;