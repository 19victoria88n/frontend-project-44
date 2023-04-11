import playGame from '../index.js';
import getRandomInRange from '../utils.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const maxNumber = 10;

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

const generateRound = () => {
  const question = getRandomInRange(0, maxNumber);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [`${question}`, answer];
};

export default () => playGame(rule, generateRound);
