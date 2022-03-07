import React, { useState, createContext } from "react";
import User from "./User";
import Login from "./Login";
export const AppContext = createContext(null);
export default function UseContextComponent() {
  const [username, setUsername] = useState("");
  return (
    <div>
      <h4>Tutorial Seven, use Context</h4>
      <p>Use context tutorial </p>
      <AppContext.Provider value={{ username, setUsername }}>
        <Login />
        <User />
      </AppContext.Provider>
    </div>
  );
}
