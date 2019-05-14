import React from 'react';
import ReactDOM from 'react-dom';
import './reboot.css';
import './index.css';
import App from './App';


// not sure what this does yet.
import registerServiceWorker from './registerServiceWorker';



//render single instance of app App.js
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
