import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const sideBarStyles={
    background:"lightslategrey", width:"320px", height:"100vh", position:"fixed", top:"65px"
}

class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <nav style={sideBarStyles}>
            <h2>{this.props.headerText}</h2>
                <ul>
                <li><Link to="/">Home</Link>   </li>
                <li><Link to="/">Members</Link> </li>
                </ul>
            </nav>
        );
    }
}
 
export default SideBar;

