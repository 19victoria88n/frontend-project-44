/* eslint-disable no-shadow */
import playGame from '../index.js';

const brainProgression = () => {
  const noteToEvenGame = 'What number is missing in the progression?';

  const getRandomNumber = () => Math.round(Math.random() * 9);

  const randProgression = (num = getRandomNumber(10), osnovanie = getRandomNumber(10)) => {
    const randProgression = [];
    let firstElement = num;
    for (let i = 1; i < 11; i += 1) {
      randProgression.push(firstElement);
      firstElement += osnovanie;
    }
    return randProgression;
  };

  const taskToEvenGame = () => {
    let correctAnswer = 0;
    const progression = (newArr = randProgression(), num1 = getRandomNumber()) => {
      correctAnswer = newArr[num1];
      // eslint-disable-next-line no-param-reassign
      newArr[num1] = '..';
      return newArr.join(' ');
    };

    const arr = progression();
    const question = `Question: ${arr}`;

    return [question, correctAnswer];
  };

  playGame(noteToEvenGame, taskToEvenGame);
};

export default brainProgression;
