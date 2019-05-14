import React, { Component } from 'react'
import {createStore} from 'redux'
import { reducer} from './store/reducers/';
import {Provider} from 'react-redux'
import {Landing, Chores, PageNotFound} from './pages'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

const store = createStore(reducer)
class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
        <Switch>
          <Route exact path="/"   component={Landing} />
          <Route path="/chores" component={Chores} />
          <Route  component={PageNotFound} />
        </Switch>
        </Provider>
      </Router>
     
    );
  }
}

export default App;
