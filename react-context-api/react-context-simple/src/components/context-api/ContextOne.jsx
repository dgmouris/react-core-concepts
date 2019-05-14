import React, { Component } from "react";
import { ContextTwo } from "./ContextTwo";
import { MyContext } from "./MyContext";

class ContextOne extends Component {
  state = {
    name: "driller",
    age: 25,
    loggedIn: 12
  };
  render() {
    console.log(`Props: ${this.state.name}`);
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          updateAge: age =>
            this.setState({
              age
            })
        }}
      >
        <div className="box-one">
          <h2>Context API Parent Component</h2>
          <p>the state is:{this.state.age} </p>
          <ContextTwo />
        </div>
      </MyContext.Provider>
    );
  }
}
export default ContextOne;
