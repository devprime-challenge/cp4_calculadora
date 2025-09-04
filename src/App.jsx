import { useState } from "react";
import Footer from './components/Footer';



function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const clearInput = () => {
    setInput("");
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Erro");
    }
  };

  return (
  <div className="calculator">
    <h1 className="title">Calculadora</h1>
    <input className="display" type="text" value={input} readOnly />

    <div className="row">
      <button className="btn clear" onClick={clearInput}>C</button>
    </div>

    <div className="row">
      <button className="btn" onClick={() => handleClick("7")}>7</button>
      <button className="btn" onClick={() => handleClick("8")}>8</button>
      <button className="btn" onClick={() => handleClick("9")}>9</button>
      <button className="btn operator" onClick={() => handleClick("/")}>/</button>
    </div>

    <div className="row">
      <button className="btn" onClick={() => handleClick("4")}>4</button>
      <button className="btn" onClick={() => handleClick("5")}>5</button>
      <button className="btn" onClick={() => handleClick("6")}>6</button>
      <button className="btn operator" onClick={() => handleClick("*")}>X</button>
    </div>

    <div className="row">
      <button className="btn" onClick={() => handleClick("1")}>1</button>
      <button className="btn" onClick={() => handleClick("2")}>2</button>
      <button className="btn" onClick={() => handleClick("3")}>3</button>
      <button className="btn operator" onClick={() => handleClick("-")}>-</button>
    </div>

    <div className="row">
      <button className="btn zero" onClick={() => handleClick("0")}>0</button>
      <button className="btn" onClick={() => handleClick(".")}>.</button>
      <button className="btn equals" onClick={calculate}>=</button>
      <button className="btn operator" onClick={() => handleClick("+")}>+</button>
      
    </div>
 <Footer />
  </div>

  );

 
}




export default App;