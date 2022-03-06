import React, { useReducer } from "react";
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT": {
      return { ...state, count: state.count + 1 };
    }
    case "TOGGLE_TEXT": {
      return { ...state, showText: !state.showText };
    }
    default: {
      return state;
    }
  }
};
export default function ReducerComponent() {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });
  return (
    <div>
      <h3>Reducer Component</h3>
      <h4>Count :{state.count}</h4>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <br />
      <br />
      <p hidden={state.showText}>This is toggle text, click button to toggle</p>
      <button onClick={() => dispatch({ type: "TOGGLE_TEXT" })}>Toggle</button>
      <br />
      <br />
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "TOGGLE_TEXT" });
        }}
      >
        Both
      </button>
    </div>
  );
}
