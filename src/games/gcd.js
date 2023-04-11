import playGame from '../index.js';
import getRandomInRange from '../utils.js';

const rule = 'Find the greatest common divisor of given numbers.';
const maxNumber = 10;

const getGcd = (num1, num2) => {
  if (num1 === 0) {
    return num2;
  }
  return getGcd(num2 % num1, num1);
};

function generateRound() {
  const number1 = getRandomInRange(0, maxNumber);
  const number2 = getRandomInRange(0, maxNumber);
  const question = `${number1} ${number2}`;
  const answer = (getGcd(number1, number2).toString());
  return [question, answer];
}

export default () => playGame(rule, generateRound);
