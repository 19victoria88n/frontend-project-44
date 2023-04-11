import playGame from '../index.js';
import getRandomInRange from '../utils.js';

const rule = 'What number is missing in the progression?';
const maxNumber = 10;
const minNumber = 5;

const getRandProgression = (first, osnovanie, length) => {
  const progression = [];
  let firstElement = first;
  for (let i = 1; i <= length; i += 1) {
    progression.push(firstElement);
    firstElement += osnovanie;
  }
  return progression;
};

const generateRound = () => {
  const firstNumber = getRandomInRange(0, maxNumber);
  const commonDiff = getRandomInRange(0, maxNumber);
  const lengthofProgression = getRandomInRange(minNumber, maxNumber);
  const progression = getRandProgression(firstNumber, commonDiff, lengthofProgression);
  const hiddenIndex = getRandomInRange(0, lengthofProgression - 1);
  const answer = (progression[hiddenIndex]).toString();
  progression[hiddenIndex] = '..';
  const question = `${progression.join(' ')}`;

  return [question, answer];
};

export default () => playGame(rule, generateRound);
