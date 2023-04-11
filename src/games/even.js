import playGame from '../index.js';
import getRandomInRange from '../utils.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const maxNumber = 10;

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const question = getRandomInRange(0, maxNumber);
  const answer = isEven(question) ? 'yes' : 'no';
  return [`${question}`, answer];
};

export default () => playGame(rule, generateRound);
