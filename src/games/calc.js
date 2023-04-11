import playGame from '../index.js';
import getRandomInRange from '../utils.js';

const rule = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
const maxNumber = 100;

const getRandomOperator = () => operators[getRandomInRange(0, operators.length - 1)];

const getCalc = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Operator ${operator} - is incorrect!`);
  }
};

const generateRound = () => {
  const number1 = getRandomInRange(0, maxNumber);
  const number2 = getRandomInRange(0, maxNumber);
  const mathSign = getRandomOperator();
  const question = `${number1} ${mathSign} ${number2}`;
  const answer = (getCalc(number1, number2, mathSign)).toString();
  return [question, answer];
};

export default () => playGame(rule, generateRound);
