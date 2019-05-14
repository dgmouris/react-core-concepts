import React, { Component } from "react";
import DashBoardLayout from "./layout/dashboard/DashBoardLayout";

import data from "./data/data.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: data };
    this.doSomething();
  }

  doSomething() {
    console.log(this.state.data);
  }
  render() {
    return <DashBoardLayout />;
  }
}

export default App;
