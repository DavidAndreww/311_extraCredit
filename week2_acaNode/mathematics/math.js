const readLine = require("readline-sync");

const mathematics = () => {
  // list of operations the user can select to be performed
  let listOfOperations = [
    "Addition",
    "Subtraction",
    "Multiplication",
    "Division"
  ];
  // user selects operation to perform
  let operation = readLine.keyInSelect(
    listOfOperations,
    "Which operation would you like to perform "
  );
  // user selects two numbers to use in the operation selected
  let number1 = readLine.question("Pick a whole number: ");
  let number2 = readLine.question("Pick another whole number: ");
  // stores truthy or falsey values based on user input for number selection
  let check = RegExp(/[^0-9]/g);
  let num1Validation = check.test(number1);
  let num2Validation = check.test(number2);

  // function that performs operation based on the user selection
  const addSubtractMultiplyDivide = (x, y, math) => {
    if (math === 0) {
      return `${x} + ${y} = ${x + y}`;
    } else if (math === 1) {
      return `${x} - ${y} = ${x - y}`;
    } else if (math === 2) {
      return `${x} * ${y} = ${x * y}`;
    } else if (math === 3) {
      return `${x} / ${y} = ${x / y}`;
    }
  };

  // if numbers are invalid, prompts user for valid input. if numbers are valid, runs the operation selected by the user and console logs the result
  if (num1Validation === false && num2Validation === false) {
    let num1 = parseInt(number1);
    let num2 = parseInt(number2);
    console.log(addSubtractMultiplyDivide(num1, num2, operation));
  } else {
    console.log("Please select two whole numbers");
    return false;
  }
};

module.exports = mathematics;
