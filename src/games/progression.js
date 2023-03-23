import playGame from '../index.js';

const brainProgression = () => {
  const noteToEvenGame = 'What number is missing in the progression?';

  const getRandomNumber = () => Math.round(Math.random() * 9);

  const randProgression = (num = getRandomNumber(10), osnovanie = getRandomNumber(10)) => {
    const arrRand = [];
    let firstElement = num;
    for (let i = 1; i < 11; i += 1) {
      arrRand.push(firstElement);
      firstElement += osnovanie;
    }
    return arrRand;
  };

  const taskToEvenGame = () => {
    let correctAnswer = 0;
    const progression = (newArr = randProgression(), num1 = getRandomNumber()) => {
      correctAnswer = newArr[num1];
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
