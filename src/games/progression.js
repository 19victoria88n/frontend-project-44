/* eslint-disable no-shadow */
import playGame from '../index.js';
import getRandomInRange from '../utils.js';

const rules = 'What number is missing in the progression?';

const randProgression = (first, osnovanie, length) => {
  const randProgression = [];
  let firstElement = first;
  for (let i = 1; i < length; i += 1) {
    randProgression.push(firstElement);
    firstElement += osnovanie;
  }
  return randProgression;
};

const runProgressionGame = () => {
  const first = getRandomInRange(0, 10);
  const osnovanie = getRandomInRange(0, 10);
  const length = 11;
  const progression = randProgression(first, osnovanie, length);
  const hiddenIndex = getRandomInRange(0, 10);
  const answer = (progression[hiddenIndex]).toString();
  progression[hiddenIndex] = '..';
  const question = `Question: ${progression.join(' ')}`;

  return [question, answer];
};

playGame(rules, runProgressionGame);

export default runProgressionGame;
