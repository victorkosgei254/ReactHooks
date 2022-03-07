import React, { useState } from "react";
import Child from "./Child";
export default function UseCallbackComponent() {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState("This is the initial Data...OK");
  const returnComment = (name) => {
    return data + name;
  };
  return (
    <div>
      <h4>Tutorial nine, use Callback</h4>
      <p>Notes: Value that is returned from the function is not called</p>
      <p>Usecallback stores a function unlike useMemo which stores a value</p>
      <Child returnComment={returnComment} />
      <button onClick={() => setToggle(!toggle)}>click Me!</button>

      <p hidden={toggle}>
        I am toggle :) ...<b>OK</b>
      </p>
    </div>
  );
}
