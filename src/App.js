import "./App.scss";
import { useState, useEffect } from "react";
import $ from "jquery";

const numerator = [
  { id: "zero", value: 0 },
  { id: "decimal", value: "." },
  { id: "one", value: 1 },
  { id: "two", value: 2 },
  { id: "three", value: 3 },
  { id: "four", value: 4 },
  { id: "five", value: 5 },
  { id: "six", value: 6 },
  { id: "seven", value: 7 },
  { id: "eight", value: 8 },
  { id: "nine", value: 9 },
];

const CLR = "clear";
const ADD = "add";
const SUB = "subtract";
const MPL = "multiply";
const DIV = "divide";
const EQL = "equals";

const operator = [
  { id: CLR, value: "AC" },
  { id: MPL, value: "*" },
  { id: DIV, value: "/" },
  { id: SUB, value: "-" },
  { id: ADD, value: "+" },
  { id: EQL, value: "=" },
];

const DEFAULT_CURRENT = "0";
const DEFAULT_EXPRESSION = "";

function App() {
  const [current, setCurrent] = useState(DEFAULT_CURRENT);
  const [expression, setExpression] = useState(DEFAULT_EXPRESSION);
  const equalRegex = /\=/;
  const operatorRegex = /(\+|\-|\*|\/)/;

  useEffect(() => {
    $("#subtract").each(function () {
      $(this).nextAll().wrapAll('<div class="container wrap_vertical"></div>');
    });
  });

  function handleOperator(e) {
    e.preventDefault();
    const operator = e.target.dataset.opname;
    const operatorValue = e.target.dataset.value;

    const last2ndChar = expression.slice(-2, -1);
    const last1stChar = expression.slice(-1);

    // normal no equal
    switch (operator) {
      case CLR: {
        setCurrent(DEFAULT_CURRENT);
        setExpression(DEFAULT_EXPRESSION);
        break;
      }
      case ADD:
      case DIV:
      case MPL:
      case SUB: {
        //check if equal ?
        console.log(equalRegex.test(expression));
        if (equalRegex.test(expression)) {
          const result = expression.split("=")[1];
          console.log(result);
          setExpression(`${result}${operatorValue}`);
        } else {
          //check last digit is an operator?
          if (operatorRegex.test(last1stChar)) {
            if (operatorRegex.test(last2ndChar)) {
              setExpression((exp) => `${exp.slice(0, -2)}${operatorValue}`);
            } else if (operator == SUB) {
              last1stChar != "-" && setExpression((exp) => `${exp}-`);
            } else {
              setExpression((exp) => `${exp.slice(0, -1)}${operatorValue}`);
            }

            console.log("check");
          } else {
            // no: add to express
            setExpression((exp) => `${exp}${operatorValue}`);
          }
        }
        setCurrent(operatorValue);
        break;
      }
      case EQL: {
        if (equalRegex.test(expression) || expression == "") {
          setExpression(`${current}=${current}`);
        } else {
          let tempLast = expression.slice(-1);
          let tempExpress = expression.slice();
          console.log(tempExpress);
          while (operatorRegex.test(tempLast)) {
            tempExpress = tempExpress.slice(0,-1);
            tempLast = tempExpress.slice(-1);
          }
          const result = eval(tempExpress);
          setExpression(`${tempExpress}=${result}`);
          setCurrent(result);
        }
        break;
      }
      default: {
        break;
      }
    }
  }

  function handleNumber(e) {
    e.preventDefault();
    const number = e.target.dataset.value;

    //check if equal
    if (equalRegex.test(expression)) {
      const result = `${number == "." ? "0." : number}`;
      setExpression(result);
      setCurrent(result);
    } else {
      if (operatorRegex.test(expression.slice(-1))) {
        // new number
        switch (number) {
          case ".": {
            setExpression((exp) => `${exp}0.`);
            setCurrent("0.");
            break;
          }
          default: {
            setExpression((exp) => `${exp}${number}`);
            setCurrent(number);
            break;
          }
        }
      } else {
        // console.log("check here");
        switch (number) {
          case ".": {
            if (current.indexOf(".") == -1) {
              const value = `${current}${number}`;
              setCurrent(value);
              setExpression((exp) => (current == "0" ? `${exp}0.` : `${exp}.`));
            }
            break;
          }
          default: {
            if (current == "0") {
              setCurrent(number);
              setExpression((exp) =>
                exp[exp.length - 1] == "0" ? exp : `${exp}${number}`
              );
            } else {
              setExpression((exp) => `${exp}${number}`);
              setCurrent((cur) => `${cur}${number}`);
            }
            // ? number : `${current}${number}`;
            break;
          }
        }
      }
    }
  }

  return (
    <div className="App container">
      <div id="calculator__wrapper" className="container">
        <div id="display__wrapper" className="display">
          <div id="display__expression">{expression}</div>
          <h2 id="display">{current}</h2>
        </div>
        <div className="numpad__wrapper">
          <div className="pad__wrapper container container_h" id="op__wrapper">
            {operator.map((item) => (
              <div
                onClick={handleOperator}
                className="pad oppad"
                id={item.id}
                data-value={item.value}
                data-opname={item.id}
                key={`op-${item.value}`}
              >
                <p data-value={item.value} data-opname={item.id}>
                  {item.value}
                </p>
              </div>
            ))}
          </div>
          <div className="pad__wrapper container container_h" id="num__wrapper">
            {numerator.map((item) => (
              <div
                data-value={item.value}
                id={item.id}
                key={`keypad-${item.id}`}
                onClick={handleNumber}
                className="pad numpad"
              >
                <p data-value={item.value}>{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
