import { add } from './add.js';
import { subtract } from './subtract.js';
import { multiply } from './multiply.js';
import { divide } from './divide.js';

const [, , firstString, operator, secondString] = process.argv;
const firstNumber = Number(firstString);
const secondNumber = Number(secondString);

let result: number = 0;

switch (operator) {
  case 'add':
    result = add(firstNumber, secondNumber);
    break;
  case 'subtract':
    result = subtract(firstNumber, secondNumber);
    break;
  case 'multiply':
    result = multiply(firstNumber, secondNumber);
    break;
  case 'divide':
    result = divide(firstNumber, secondNumber);
    break;
  default:
    console.log('Try again');
}
console.log('Result:', result);
