import logo from "./logo.svg";
import "./App.css";
import Counter from "./useState/Counter";
import Input from "./useState/Input";

import ReducerComponent from "./useReducer/ReducerComponent";

import Style from "./App.module.css";

function App() {
  return (
    <div className={Style.app}>
      <div className={Style.useState}>
        <h3>Tutorial One , Use State</h3>
        <Counter />
        <Input />
      </div>

      <div className={Style.useReducer}>
        <h3>Tutorial Two, use Reducer</h3>
        <ReducerComponent />
      </div>
    </div>
  );
}

export default App;
