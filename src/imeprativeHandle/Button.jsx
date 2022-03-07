import React, { useState, forwardRef, useImperativeHandle } from "react";

const Button = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);
  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle(!toggle);
    },
  }));
  return (
    <div>
      <p>Child Button Component</p>
      <button onClick={() => setToggle(!toggle)}>Child Btn</button>
      <p hidden={toggle}>This is displayed when toggle is set to true</p>
    </div>
  );
});
export default Button;
