import React, { useState, useEffect } from "react";
import "./styles.css";
import Timer from "./Timer";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h3>Timer from Sample track2</h3>
      <Timer />
      <h3>Timer from Handon track2</h3>
      <Timer2 />
      <h3>Timer from SetInterval Practise track2</h3>
      <Timer3 />
    </div>
  );
}

const Timer3 = () => {
  const [second, setSec] = useState(0);
  let interval = null;
  const start = () => {
    interval = setInterval(setSec(second + 1), 1000);
  };
  const stop = () => {
    clearInterval(interval);
  };
  return (
    <div>
      <div>Timer: {second}s</div>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
    </div>
  );
};

const Timer2 = () => {
  const [second, setSecond] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const reset = () => {
    setSecond(0);
    setIsActive(false);
  };

  const toggle = () => {
    isActive ? setIsActive(false) : setIsActive(true);
    // setIsActive(!isActive); // Internet Example
  };

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSecond(second + 1);
      }, 1000);
      console.log(interval);
    } else if (!isActive && second !== 0) {
      // second !== 0 mean while in pause state, even reset will not excute here
      clearInterval(interval);
      console.log("ClearTimer");
    }
    return () => clearInterval(interval);
  }, [isActive, second]);

  return (
    <div>
      <div>{isActive ? "start" : "pause"}</div>
      <div>{second}s</div>
      <button onClick={toggle}>Start</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
