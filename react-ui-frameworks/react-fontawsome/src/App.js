import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import DeleteIcon from '@material-ui/icons/Delete';

class App extends Component {
  render() {
    return (
      <div className="app">
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h6" color="inherit">
           <MenuIcon/>
          </Typography>
          </Toolbar>
        </AppBar>
           
      </div>
    );
  }
}

export default App;
