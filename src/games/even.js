import playGame from '../index.js';
import getRandomInRange from '../utils.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const randomNumber = getRandomInRange(0, 10);
  const question = `${randomNumber}`;
  const answer = isEven(randomNumber) ? 'yes' : 'no';
  return [question, answer];
};

export default () => playGame(rules, generateRound);
