import playGame from '../index.js';
import getRandomInRange from '../utils.js';

const rules = 'What is the result of the expression?';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[getRandomInRange(0, operators.length - 1)];
};

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

const runCalcGame = () => {
  const num1 = getRandomInRange(0, 100);
  const num2 = getRandomInRange(0, 100);
  const mathSign = getRandomOperator();
  const question = `Question: ${num1} ${mathSign} ${num2}`;
  const answer = (calculation(num1, num2, mathSign)).toString();
  return [question, answer];
};

playGame(rules, runCalcGame);

export default runCalcGame;
