import Result from "./components/Result.js";
import Key from "./components/Key.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="calculator">
          <Result></Result>
          <div id="numpad">
            <Key value="AC" color="grey" onClick={() => Result(3)}></Key>
            <Key value="+/-" color="grey"></Key>
            <Key value="%" color="grey"></Key>
            <Key value="/" color="orange"></Key>
            <Key value="7" color="black"></Key>
            <Key value="8" color="black"></Key>
            <Key value="9" color="black"></Key>
            <Key value="x" color="orange"></Key>
            <Key value="4" color="black"></Key>
            <Key value="5" color="black"></Key>
            <Key value="6" color="black"></Key>
            <Key value="-" color="orange"></Key>
            <Key value="1" color="black"></Key>
            <Key value="2" color="black"></Key>
            <Key value="3" color="black"></Key>
            <Key value="+" color="orange"></Key>
            <Key value="0" color="black"></Key>
            <Key value="," color="black"></Key>
            <Key value="=" color="orange"></Key>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
