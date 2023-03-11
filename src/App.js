import Result from "./components/Result.js";
import GenerateKey from "./components/GenerateKey.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="calculator">
          <Result></Result>
          <div id="numpad">
            <GenerateKey value="clear"></GenerateKey>
            <GenerateKey value="changeSign"></GenerateKey>
            <GenerateKey value="module"></GenerateKey>
            <GenerateKey value="divide"></GenerateKey>
            <GenerateKey value="seven"></GenerateKey>
            <GenerateKey value="eight"></GenerateKey>
            <GenerateKey value="nine"></GenerateKey>
            <GenerateKey value="multiply"></GenerateKey>
            <GenerateKey value="four"></GenerateKey>
            <GenerateKey value="five"></GenerateKey>
            <GenerateKey value="six"></GenerateKey>
            <GenerateKey value="substract"></GenerateKey>
            <GenerateKey value="one"></GenerateKey>
            <GenerateKey value="two"></GenerateKey>
            <GenerateKey value="three"></GenerateKey>
            <GenerateKey value="add"></GenerateKey>
            <GenerateKey value="zero"></GenerateKey>
            <GenerateKey value="comma"></GenerateKey>
            <GenerateKey value="equal"></GenerateKey>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
