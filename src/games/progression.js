import playGame from '../index.js';

const brainProgression = () => {
  const noteToEvenGame = 'What number is missing in the progression?';

  const getRandomNumber = () => Math.round(Math.random() * 10);

  const arrayRand = (arrRand = [getRandomNumber()], osnovanie = getRandomNumber()) => {
    for (let i = 1; i < 10; i += 1) {
      arrRand[i] = arrRand[i - 1] + osnovanie;
    }
    return arrRand;
  };
  const taskToEvenGame = () => {
    let correctAnswer = 0;
    const newArrr = (newArr = arrayRand(), num1 = getRandomNumber()) => {
      correctAnswer = newArr[num1];
      newArr[num1] = '..';
      return newArr.join(' ');
    };

    const arr = newArrr();
    const question = `${arr}`;

    return [question, correctAnswer];
  };

  playGame(noteToEvenGame, taskToEvenGame);
};

export default brainProgression;
