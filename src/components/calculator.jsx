import { Box, Container } from "@mui/material";
import React, { useState } from "react";
import "./calculator.css";

export default function Calculator() {
  const [num, setNum] = useState(0);
  const [oldNum, setOldNum] = useState(0);
  const [operator, setOperator] = useState();

  function inputNum(e) {
    let input = e.target.value;
    if (num === 0) {
      setNum(input);
    } else {
      setNum(num + input);
    }
  }

  function clear() {
    setNum(0);
  }

  function percentage() {
    setNum(num / 100);
  }

  function changeSignal() {
    if (num > 0) {
      setNum(-num);
    } else {
      setNum(Math.abs(num));
    }
  }

  function operatorHandler(e) {
    let operatorInput = e.target.value;
    setOperator(operatorInput);
    setOldNum(num);
    setNum(0);
  }

  function calculate() {
    const oldNumNumber = parseFloat(oldNum.replace(",", "."));
    const numNumber = parseFloat(num.replace(",", "."));

    if (operator === "/") {
      setNum((oldNumNumber / numNumber).toLocaleString("pt-BR"));
      //setNum(parseFloat(oldNum) / parseFloat(num));
    } else if (operator === "X") {
      setNum((oldNumNumber * numNumber).toLocaleString("pt-BR"));
      //setNum(parseFloat(oldNum) * parseFloat(num));
    } else if (operator === "-") {
      setNum((oldNumNumber - numNumber).toLocaleString("pt-BR"));
      //setNum(parseFloat(oldNum) - parseFloat(num));
    } else if (operator === "+") {
      setNum((oldNumNumber + numNumber).toLocaleString("pt-BR"));
      //setNum(parseFloat(oldNum) + parseFloat(num));
    }
  }

  return (
    <div>
      <Box m={5} />
      <Container maxWidth="xs">
        <div className="wrapper">
          <h2 className="result">{num}</h2>
          <button className="lightGray" onClick={clear}>
            AC
          </button>
          <button className="lightGray" onClick={changeSignal}>
            +/-
          </button>
          <button className="lightGray" onClick={percentage}>
            %
          </button>
          <button className="orange" onClick={operatorHandler} value="/">
            /
          </button>

          <button className="gray" onClick={inputNum} value={7}>
            7
          </button>
          <button className="gray" onClick={inputNum} value={8}>
            8
          </button>
          <button className="gray" onClick={inputNum} value={9}>
            9
          </button>
          <button className="orange" onClick={operatorHandler} value="X">
            X
          </button>

          <button className="gray" onClick={inputNum} value={4}>
            4
          </button>
          <button className="gray" onClick={inputNum} value={5}>
            5
          </button>
          <button className="gray" onClick={inputNum} value={6}>
            6
          </button>
          <button className="orange" onClick={operatorHandler} value="-">
            -
          </button>

          <button className="gray" onClick={inputNum} value={1}>
            1
          </button>
          <button className="gray" onClick={inputNum} value={2}>
            2
          </button>
          <button className="gray" onClick={inputNum} value={3}>
            3
          </button>
          <button className="orange" onClick={operatorHandler} value="+">
            +
          </button>

          <button id="btnZero" className="gray" onClick={inputNum} value={0}>
            0
          </button>
          <button className="gray" onClick={inputNum} value={","}>
            ,
          </button>
          <button className="orange" onClick={calculate}>
            =
          </button>
        </div>
      </Container>
    </div>
  );
}
