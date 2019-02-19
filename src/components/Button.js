import React from "react";

const Button = props => {
  const increment = props.increment;
  const onClickFunction = props.onClickFunction;
  let label = props.label;
  const handleClick = () => {
    onClickFunction(increment);
  };
  // console.log(label);
  if (label === undefined) {
    label = increment;
  }
  return <button onClick={handleClick}>{label}</button>;
};

export default Button;
