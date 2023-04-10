import playGame from '../index.js';
import getRandomInRange from '../utils.js';

const rules = 'What number is missing in the progression?';

const randProgression = (first, osnovanie, length) => {
  const progression = [];
  let firstElement = first;
  for (let i = 1; i <= length; i += 1) {
    progression.push(firstElement);
    firstElement += osnovanie;
  }
  return progression;
};

const generateRound = () => {
  const firstNumber = getRandomInRange(0, 10);
  const commonDiff = getRandomInRange(0, 10);
  const lengthofProgression = getRandomInRange(5, 10);
  const progression = randProgression(firstNumber, commonDiff, lengthofProgression);
  const hiddenIndex = getRandomInRange(0, lengthofProgression - 1);
  const answer = (progression[hiddenIndex]).toString();
  progression[hiddenIndex] = '..';
  const question = `${progression.join(' ')}`;

  return [question, answer];
};

export default () => playGame(rules, generateRound);
