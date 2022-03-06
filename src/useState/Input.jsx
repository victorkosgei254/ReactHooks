import React, { useState } from "react";

export default function Input() {
  const [myname, setName] = useState("");

  const handleChange = (event) => {
    console.log(" My Name is " + myname);
  };
  return (
    <div>
      <hr />
      <h1>Hello {myname} !! Welcome to React Hooks :)</h1>
      <input
        type="text"
        name="myname"
        id="myname"
        placeholder="Enter your name !!"
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <button onClick={handleChange}>setName</button>
    </div>
  );
}
