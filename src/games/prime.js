import playGame from '../index.js';
import getRandomInRange from '../utils.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

const generateRound = () => {
  const randomNumber = getRandomInRange(0, 10);
  const question = `${randomNumber}`;
  const answer = isPrime(randomNumber) ? 'yes' : 'no';
  return [question, answer];
};

export default () => playGame(rules, generateRound);
