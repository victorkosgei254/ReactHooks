import React, { useRef } from "react";
import Button from "./Button";
export default function ImperativeHandleComponent() {
  const childBtnRef = useRef(null);
  return (
    <div>
      <h4>Tutorial Six, Imperative Handle</h4>
      <p>Working on imperative handle</p>
      <button onClick={() => childBtnRef.current.alterToggle()}>
        Parent Btn
      </button>
      <Button ref={childBtnRef} />
    </div>
  );
}
