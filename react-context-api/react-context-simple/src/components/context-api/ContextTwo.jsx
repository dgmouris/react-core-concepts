import React from "react";
import { MyContext } from "./MyContext";
const ContextThree = props => {
  return (
    <div className="box-three">
      <h2>Child Component</h2>

      <MyContext.Consumer>
        {context => {
          return (
            <React.Fragment>
              <p>Current State: {context.state.age} </p>
              <button onClick={() => context.updateAge(36)}>
                Update State
              </button>
            </React.Fragment>
          );
        }}
      </MyContext.Consumer>

      <div />
    </div>
  );
};

const ContextTwo = props => {
  return (
    <div className="box-two">
      <h2>Child Component</h2>
      <p>I don't need to know the state but I do:</p>
      <p>Iam inside the consumer</p>
      <ContextThree />
    </div>
  );
};

export { ContextTwo };
