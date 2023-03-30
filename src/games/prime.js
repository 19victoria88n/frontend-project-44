import playGame from '../index.js';
import getRandomInRange from '../utils.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function isPrime(num) {
  let result = 0;
  for (let i = 1; i < num; i += 1) {
    if (num % i === 0) {
      result = i;
    }
  }
  if (result === 1) {
    return 'yes';
  }
  return 'no';
}

const runPrimeGame = () => {
  const num = getRandomInRange(0, 10);
  const question = `Question: ${num}`;
  const answer = isPrime(num);
  return [question, answer];
};

playGame(rules, runPrimeGame);

export default runPrimeGame;
