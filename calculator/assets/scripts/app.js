let defaultResult = 0;
let currentResult = defaultResult;
outputResult(currentResult, "");
userInput.value = 0;

let logEntries = [];

/*
    This is a utility function that converts the user input in string format to a number
*/
function getUserNumberInput() {
  return parseInt(userInput.value);
}

/*
    This function takes the previous result the current number, operator generates a description of operation and adds it to the html
    the calling function should update the currentResult by doing the actual operation
*/
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

/*
    This function creates an object for the operation, saves it into an array and logs it 
*/
function writeToLog(
  operationItentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationItentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculate(calculationType) {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  let mathOperator;
  if (calculationType === "ADD") {
    mathOperator = "+";
    currentResult += enteredNumber;
  } else if (calculationType === "SUBTRACT") {
    mathOperator = "-";
    currentResult -= enteredNumber;
  } else if (calculationType === "MULTIPLY") {
    mathOperator = "*";
    currentResult *= enteredNumber;
  } else {
    mathOperator = "/";
    currentResult /= enteredNumber;
  }
  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}
/*
    This function performs the add operation, by passing the calculationType to calculateResult function
*/
function add() {
  calculate('ADD');
}

/*
    This function performs the subtract operation, by passing the calculationType to calculateResult function
*/
function subtract() {
  calculate('SUBTRACT');
}
/*
    This function performs the multiply operation, by passing the calculationType to calculateResult function
*/
function multiply() {
  calculate('MULTIPLY');
}
/*
    This function performs the divide operation, by passing the calculationType to calculateResult function
*/
function divide() {
  calculate('DIVIDE');
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
