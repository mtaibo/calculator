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
            <Key value="clear"></Key>
            <Key value="changeSign"></Key>
            <Key value="module"></Key>
            <Key value="divide"></Key>
            <Key value="seven"></Key>
            <Key value="eight"></Key>
            <Key value="nine"></Key>
            <Key value="multiply"></Key>
            <Key value="four"></Key>
            <Key value="five"></Key>
            <Key value="six"></Key>
            <Key value="substract"></Key>
            <Key value="one"></Key>
            <Key value="two"></Key>
            <Key value="three"></Key>
            <Key value="add"></Key>
            <Key value="zero"></Key>
            <Key value="comma"></Key>
            <Key value="equal"></Key>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
