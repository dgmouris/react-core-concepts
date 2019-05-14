import React from "react";

const Button = props => {
  return <button onClick={props.onClickHandler}>{props.name}</button>;
};

export default Button;
