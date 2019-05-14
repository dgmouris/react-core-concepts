import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SidebarItem = (props)=>{
    return(<li>The Side Bar Item</li>)
}

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <aside className="sidebar">
            What is going on here <FontAwesomeIcon icon="stroopwafel" />
            <SidebarItem/>
            </aside>
        );
    }
}

export default Sidebar;