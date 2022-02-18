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
/*
    This function performs the add operation, updates currentResult and calls createAndWriteOutput
*/
function add() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteOutput("+", initialResult, enteredNumber);
  writeToLog("ADD", initialResult, enteredNumber, currentResult);
}

/*
    This function performs the subtract operation, updates currentResult and calls createAndWriteOutput
*/
function subtract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput("-", initialResult, enteredNumber);
  writeToLog("SUBTRACT", initialResult, enteredNumber, currentResult);
}
/*
    This function performs the multiply operation, updates currentResult and calls createAndWriteOutput
*/
function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput("*", initialResult, enteredNumber);
  writeToLog("MULTIPLY", initialResult, enteredNumber, currentResult);
}
/*
    This function performs the divide operation, updates currentResult and calls createAndWriteOutput
*/
function divide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput("/", initialResult, enteredNumber);
  writeToLog("DIVIDE", initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
