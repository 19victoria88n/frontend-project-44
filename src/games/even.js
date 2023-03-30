import playGame from '../index.js';
import getRandomInRange from '../utils.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const runEvenGame = () => {
  const num = getRandomInRange(0, 10);
  const question = `Question: ${num}`;
  const answer = isEven(num);
  return [question, answer];
};

playGame(rules, runEvenGame);

export default runEvenGame;
