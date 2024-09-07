// src/components/Calculator.jsx
import React, { useState, useEffect } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  // Handle button inputs
  const handleInput = (e) => {
    setInput(input + e.target.value);
  };

  // Handle keyboard inputs
  const handleKeyDown = (e) => {
    const allowedKeys = "0123456789+-*/.";
    if (allowedKeys.includes(e.key)) {
      setInput(input + e.key);
    } else if (e.key === "Enter") {
      calculate();
    } else if (e.key === "Backspace") {
      setInput(input.slice(0, -1));  // Remove the last character
    } else if (e.key === "Escape") {
      clearInput();
    }
  };

  // Perform the calculation
  const calculate = () => {
    try {
      // Check for division by zero
      if (input.includes("/0")) {
        setResult("Error: Division by zero");
        return;
      }
      // Evaluate the input and round to 2 decimal places if needed
      const evalResult = eval(input);
      setResult(parseFloat(evalResult.toFixed(2)));
    } catch (error) {
      setResult("Error: Invalid input");
    }
  };

  // Clear input and result
  const clearInput = () => {
    setInput("");
    setResult(null);
  };

  // Reset input and result completely
  const resetCalculator = () => {
    setInput("");
    setResult(null);
  };

  // Listen to keyboard events
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [input]);

  return (
    <div className="calculator-container">
      <input className="calculator-display" type="text" value={input} readOnly />
      <div className="calculator-buttons">
        <button onClick={handleInput} value="1">1</button>
        <button onClick={handleInput} value="2">2</button>
        <button onClick={handleInput} value="3">3</button>
        <button onClick={handleInput} value="+">+</button>
        <button onClick={handleInput} value="4">4</button>
        <button onClick={handleInput} value="5">5</button>
        <button onClick={handleInput} value="6">6</button>
        <button onClick={handleInput} value="-">-</button>
        <button onClick={handleInput} value="7">7</button>
        <button onClick={handleInput} value="8">8</button>
        <button onClick={handleInput} value="9">9</button>
        <button onClick={handleInput} value="*">*</button>
        <button onClick={handleInput} value="0">0</button>
        <button onClick={handleInput} value=".">.</button>
        <button onClick={handleInput} value="/">/</button>
        <button className="equal" onClick={calculate}>=</button>
        <button className="clear" onClick={clearInput}>Clear</button>
        <button className="reset" onClick={resetCalculator}>Reset</button>
      </div>
      <div className="calculator-result">
        {result !== null && <p>Result: {result}</p>}
      </div>
    </div>
  );
};

export default Calculator;
