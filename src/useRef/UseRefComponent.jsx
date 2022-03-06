import React, { useRef } from "react";

export default function UseRefComponent() {
  const inputRef = useRef(null);

  const clickMe = () => {
    if (inputRef.current.value == "") {
      inputRef.current.focus();
    } else console.log(inputRef.current.value);
  };
  return (
    <div>
      <h3>Tutorial 4, use Ref</h3>
      <p>
        Prints the value of input text field when filled, <b>moves focus</b> to
        the input text when no name is filled.
      </p>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="your name "
        ref={inputRef}
      />
      <br />
      <button onClick={clickMe}>click</button>
    </div>
  );
}
