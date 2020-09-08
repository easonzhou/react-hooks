import React, { useReducer } from 'react';
import './App.css';
import ClassCounter from "./components/ClassCounter";
import HookCounter from "./components/HookCounter";
import HookCounterTwo from "./components/HookCounterTwo";
import HookCounterThree from "./components/HookCounterThree";
import HookCounterFour from "./components/HookCounterFour";
import ClassCounterOne from "./components/ClassCounterOne";
import HookCounterOne from "./components/HookCounterOne";
import DataFetching from "./components/DataFetching";
import ClassMouse from "./components/ClassMouse";
import MouseContainer from "./components/MouseContainer";
import ComponentC from "./components/ComponentC";
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";
import CounterThree from "./components/CounterThree";
import DataFetchingOne from "./components/DataFetchingOne";
import DataFetchingTwo from "./components/DataFetchingTwo";
import ComponentA from "./components/ComponentA";

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialState;
    default:
      return state;
  }
}

export const CounterContext = React.createContext();

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <CounterContext.Provider value={{ countState: count, countDispatch: dispatch }}>
      <div className="App">
        {/* <ClassCounter /> */}
        {/* <HookCounter /> */}
        {/* <HookCounterTwo /> */}
        {/* <HookCounterThree /> */}
        {/* <HookCounterFour /> */}
        {/* <ClassCounterOne /> */}
        {/* <HookCounterOne /> */}
        {/* <DataFetching /> */}
        {/* <ClassMouse /> */}
        {/* <MouseContainer /> */}
        <UserContext.Provider value={'Yinsheng'} >
          <ChannelContext.Provider value={'GeneralAssembly'} >
            <ComponentC />
          </ChannelContext.Provider>
        </UserContext.Provider>
        {/* <CounterOne /> */}
        {/* <CounterTwo /> */}
        {/* <CounterThree /> */}
        {/* <DataFetchingOne /> */}
        {/* <DataFetchingTwo /> */}
        {/* <ComponentA /> */}
      </div>
    </CounterContext.Provider>
  );
}

export default App;
