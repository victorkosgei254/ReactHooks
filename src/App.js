import logo from "./logo.svg";
import "./App.css";
import Counter from "./useState/Counter";
import Input from "./useState/Input";

import ReducerComponent from "./useReducer/ReducerComponent";
import EffectComponent from "./useEffect/EffectComponent";
import UseRefComponent from "./useRef/UseRefComponent";
import LayoutEffectComponent from "./useLayoutEffect/LayoutEffectComponent";
import ImperativeHandleComponent from "./imeprativeHandle/ImperativeHandleComponent";
import UseMemoComponent from "./useMemo/UseMemoComponent";
import UseCallbackComponent from "./useCallback/UseCallbackComponent";
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

      <div className={Style.useEffect}>
        <EffectComponent />
      </div>

      <div className={Style.useRef}>
        <UseRefComponent />
      </div>

      <div className={Style.useLayoutEffect}>
        <LayoutEffectComponent />
      </div>

      <div className={Style.imperativeHandle}>
        <ImperativeHandleComponent />
      </div>

      <div className={Style.useMemo}>
        <UseMemoComponent />
      </div>
      <div className={Style.useCallback}>
        <UseCallbackComponent />
      </div>
    </div>
  );
}

export default App;
