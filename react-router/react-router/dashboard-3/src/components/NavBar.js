import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class NavBar extends Component {
    state = {  }
    render() { 
        return (  
          <nav className="nav-bar">
          <ul>
              <li className="site-title"><h2>site branding</h2></li>
              <li className="user-details"><p>user details</p></li>
              <li className="user-settings-menu"> <FontAwesomeIcon className="user-settings-icon" icon={['fas', 'user-cog']}/></li>
          </ul>            
          </nav>
        );
    }
}
 
export default NavBar;