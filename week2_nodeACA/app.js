/**
 * Write a program that will use readline to take user input. The input will follow certain rules which is our syntax.

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

const readLine = require('readline-sync')

let listOfOperations = ['Addition', 'Subtraction', 'Multiplication', 'Division']
let operation = readLine.keyInSelect(listOfOperations,'Which operation would you like to perform ')
let number1 = readLine.question(`Pick a whole number`);
let number2 = readLine.question('Pick another whole number');


let regex = /[^0-9]/g;
let num1Validation = regex.test(number1)
let num2Validation = regex.test(number2)

let addSubtractMultiplyDivide = (x, y, math) => {
 if(math === 0) {
   return x + y;
 } else if (math === 1) {
   return x - y;
 } else if (math === 2) {
   return x * y;
 } else if (math === 3) {
   return x / y;
 } else if (math === 0) {
   return 'Operation cancelled'
 }
}

if (num1Validation !== false && num2Validation !== false){
  console.log('Please select two whole numbers')
  return false
} else {
  console.log(addSubtractMultiplyDivide(number1, number2, operation))
}
