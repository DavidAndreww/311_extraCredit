/*
 Write a program that will use readline to take user input. The input will follow certain rules which is our syntax.

Calculator
The input will be similiar to x + y. We can add, subtract, multiply or divide. Determine the 2 numbers, determine the math operator and output the result

Bool
The input will be X > Y. We can compare <, >, ===, !==. return true or false

Variable
The input will be let whatever = “something”, if the user then types in the variable name, it should print it back out

Bonus
Combine the functionality so you can assign a bool or number into a variable
If anything else is input that cannot be matched, output Syntax Error
 */

const readLine = require("readline-sync");
const mathematics = require("./mathematics/math");
const compareTwo = require("./trueOrFalse/boolean");
const makeAVariable = require("./makeAVariable/variable");

const listOfActions = ["Calculator", "True or False", "Define Variable"];
let userSelection = readLine.keyInSelect(
  listOfActions,
  "What would you like to do? "
);

const whatToDo = userChoice => {
  if (userChoice === 0) {
    return mathematics();
  } else if (userChoice === 1) {
    return compareTwo();
  } else if (userChoice === 2) {
    return makeAVariable();
  }
};

whatToDo(userSelection);
