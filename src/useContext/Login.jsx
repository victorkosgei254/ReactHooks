import React, { useContext } from "react";

import { AppContext } from "./UseContextComponent";
export default function Login() {
  const { setUsername } = useContext(AppContext);
  const handleChange = (e) => {
    setUsername(e.target.value);
  };
  return (
    <div>
      <p>
        This is a login component, with an input, values are stored in parent,
        values are obtained in child.
      </p>
      <input
        type="text"
        name="username"
        id="username"
        placeholder="From Child, enter username"
        onChange={handleChange}
      />
    </div>
  );
}
