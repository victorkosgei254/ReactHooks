import React, { useEffect, useState } from "react";

export default function Child({ returnComment }) {
  useEffect(() => {
    console.log("Function was Called");
  }, [returnComment]);

  const [name, setName] = useState(null);

  const handleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div>
      <p>This is the child component</p>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Enter name"
        onChange={handleChange}
      />
      <p> From Parent as Props : {returnComment(name)}</p>
    </div>
  );
}
