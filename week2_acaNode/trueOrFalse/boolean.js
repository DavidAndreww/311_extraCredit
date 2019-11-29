const readLine = require("readline-sync");

const compareTwo = () => {
  let waysToCompare = [
    "Greater Than ( > )",
    "Less Than ( < )",
    "Equal To",
    "Not Equal To"
  ];

  // user selects two numbers to use in the operation selected
  let number1 = readLine.question("Pick a whole number: ");
  let number2 = readLine.question("Pick another whole number: ");
  // stores truthy or falsey values based on user input for number selection
  let check = RegExp(/[^0-9]/g);
  let num1Validation = check.test(number1);
  let num2Validation = check.test(number2);

  const boolean = (x, y, check) => {
    if (check === 0) {
      return x > y;
    } else if (check === 1) {
      return x < y;
    } else if (check === 2) {
      return x === y;
    } else if (check === 3) {
      return x !== y;
    }
  };

  if (num1Validation === false && num2Validation === false) {
    let num1 = parseInt(number1);
    let num2 = parseInt(number2);
    let comparison = readLine.keyInSelect(
      waysToCompare,
      "How would you like to compare the numbers? "
    );
    console.log(boolean(num1, num2, comparison));
  } else {
    console.log("Please select two whole numbers");
    return false;
  }
};

module.exports = compareTwo;
