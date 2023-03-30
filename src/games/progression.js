/* eslint-disable no-shadow */
import playGame from '../index.js';
import getRandomInRange from '../utils.js';

const rules = 'What number is missing in the progression?';

const randProgression = (first, osnovanie) => {
  const randProgression = [];
  let firstElement = first;
  for (let i = 1; i < 11; i += 1) {
    randProgression.push(firstElement);
    firstElement += osnovanie;
  }
  return randProgression;
};

let missingElement = '';
const getMissingElement = (newArr, num1) => {
  missingElement = newArr[num1];
  // eslint-disable-next-line no-param-reassign
  newArr[num1] = '..';
  return newArr.join(' ');
};

const runProgressionGame = () => {
  const first = getRandomInRange(0, 10);
  const osnovanie = getRandomInRange(0, 10);
  const newArr = randProgression(first, osnovanie);
  const num1 = getRandomInRange(0, 10);
  const progression = getMissingElement(newArr, num1);
  const answer = (missingElement).toString();
  const question = `Question: ${progression}`;

  return [question, answer];
};

playGame(rules, runProgressionGame);

export default runProgressionGame;
