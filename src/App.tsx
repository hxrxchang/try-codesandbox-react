import * as React from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = React.useState<number>(0);
  return (
    <div className="App">
      {count}
      <button onClick={() => setCount(count + 1)}>click</button>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
