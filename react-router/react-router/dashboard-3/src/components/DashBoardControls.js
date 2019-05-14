import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 
 
 

 
 

class DashBoardControls extends Component {
    state = {  }
    render() { 
        return (  
            <aside className="dashboard-controls">

            <ul className="dashboard-panel-options">
              <li><FontAwesomeIcon className="option-icon" icon={["fas", "tachometer"]} />dashboard </li>
              <li><FontAwesomeIcon className="option-icon" icon={["fas", "layer-plus"]} />new quizz</li>
              <li><FontAwesomeIcon className="option-icon" icon={["fas", "project-diagram"]} />projects</li>
              <li><FontAwesomeIcon className="option-icon" icon={["fas", "marker"]} />marking</li>
              <li><FontAwesomeIcon className="option-icon" icon={["fas", "chalkboard-teacher"]} />testing</li>
              <li><FontAwesomeIcon className="option-icon" icon={["fas", "badge-check"]} />progress</li>
            </ul>
            </aside>
        );
    }
}
 
export default  DashBoardControls ;