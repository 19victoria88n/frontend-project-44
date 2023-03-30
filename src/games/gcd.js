import playGame from '../index.js';
import getRandomInRange from '../utils.js';

const rules = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  let correctAnswer = num1 + num2;
  while (num1 !== 0 && num2 !== 0) {
    if (num1 > num2) {
      // eslint-disable-next-line no-param-reassign
      num1 %= num2;
      correctAnswer = num1 + num2;
    } else {
      // eslint-disable-next-line no-param-reassign
      num2 %= num1;
      correctAnswer = num1 + num2;
    }
  }
  return correctAnswer;
};

function runGcdGame() {
  const num1 = getRandomInRange(0, 10);
  const num2 = getRandomInRange(0, 10);
  const question = `Question: ${num1} ${num2}`;
  const answer = (getGcd(num1, num2).toString());
  return [question, answer];
}

playGame(rules, runGcdGame);

export default runGcdGame;
