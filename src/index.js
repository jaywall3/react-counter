import React, { useState } from "react";
import ReactDOM from "react-dom";

import Button from "./components/Button";

import "./styles.css";

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = increment => {
    setCount(count + increment);
  };

  return (
    <div className="App">
      <Button increment={1} onClickFunction={incrementCount} />
      <Button increment={10} onClickFunction={incrementCount} />
      <Button increment={100} onClickFunction={incrementCount} />
      <Button increment={1000} onClickFunction={incrementCount} />
      <Button increment={10000} onClickFunction={incrementCount} />
      <Button increment={-1} onClickFunction={incrementCount} />
      <Button increment={-10} onClickFunction={incrementCount} />
      <Button increment={-100} onClickFunction={incrementCount} />
      <Button increment={-1000} onClickFunction={incrementCount} />
      <Button increment={-10000} onClickFunction={incrementCount} />
      <Button increment={-count} onClickFunction={incrementCount} />

      <span>{count}</span>
    </div>
  );
}
// Tried to label button as "Reset" - didn't work
// Reset functionality works

// no idea how to save the count

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
