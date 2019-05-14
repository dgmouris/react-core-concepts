import React, { Component } from "react";
import { DrillerTwo } from "./DrillerChildren";

class DrillerOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "jim"
    };
  }
  changeState = e => {
    console.log(e.target.value);
    this.setState({ name: e.target.value });
  };
  render() {
    return (
      <div className="box-one">
        <h2>Prop Driller Component</h2>
        <p>
          update the state:
          <input value={this.state.name} onChange={this.changeState} />
        </p>
        <DrillerTwo name={this.state.name} />
      </div>
    );
  }
}

export default DrillerOne;
