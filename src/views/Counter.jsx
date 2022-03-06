import React, { useEffect, useState } from "react";

const Counter = () => {
  const [counter, setCount] = useState(0);

  let increment = () => {
    setCount(counter + 1);
  };
  return (
    <div>
      <h1>Counter :{counter}</h1>
      <button onClick={increment}>increment</button>
    </div>
  );
};
export default Counter;
