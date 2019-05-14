import React from "react";

const DrillerThree = props => {
  return (
    <div className="box-three">
      <h2>Child Component</h2>
      <p>What is the state: {props.name}</p>
    </div>
  );
};

const DrillerTwo = props => {
  return (
    <div className="box-two">
      <h2>Child Component</h2>
      <p>I don't need to know the state but I do: {props.name}</p>
      <DrillerThree name={props.name} />
    </div>
  );
};

export { DrillerTwo };
