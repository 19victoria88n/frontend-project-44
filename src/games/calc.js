import playGame from '../index.js';
import getRandomInRange from '../utils.js';

const rule = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const getRandomOperator = () => operators[getRandomInRange(0, operators.length - 1)];

const calculation = (num1, num2, operator) => {
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
  const randomNumber1 = getRandomInRange(0, 100);
  const randomNumber2 = getRandomInRange(0, 100);
  const mathSign = getRandomOperator();
  const question = `${randomNumber1} ${mathSign} ${randomNumber2}`;
  const answer = (calculation(randomNumber1, randomNumber2, mathSign)).toString();
  return [question, answer];
};

export default () => playGame(rule, generateRound);
