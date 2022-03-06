import React, { useState } from "react";

export default function Input() {
  const [myname, setName] = useState("");

  const handleChange = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
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
        onChange={handleChange}
      />
      <button>setName</button>
    </div>
  );
}
