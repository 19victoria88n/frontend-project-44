import playGame from '../index.js';
import getRandomInRange from '../utils.js';

const rules = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  if (num1 === 0) {
    return num2;
  }
  return getGcd(num2 % num1, num1);
};

function generateRound() {
  const num1 = getRandomInRange(0, 10);
  const num2 = getRandomInRange(0, 10);
  const question = `Question: ${num1} ${num2}`;
  const answer = (getGcd(num1, num2).toString());
  return [question, answer];
}

export default () => playGame(rules, generateRound);
