import React, { useContext } from "react";
import { AppContext } from "./UseContextComponent";

export default function User() {
  const { username } = useContext(AppContext);
  return (
    <div>
      <p>
        This is another child, to display the username, all values are obtained
        from parents
      </p>
      <h4>User:{username}</h4>
    </div>
  );
}
