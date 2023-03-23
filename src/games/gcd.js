import playGame from '../index.js';

const brainGcd = () => {
  const noteToEvenGame = 'Find the greatest common divisor of given numbers.';
  const getRandomNumber = () => Math.round(Math.random() * 10);
  const taskToEvenGame = () => {
    let num1 = getRandomNumber();
    let num2 = getRandomNumber();
    const question = `${num1} ${num2}`;
    let correctAnswer = num1 + num2;
    while (num1 !== 0 && num2 !== 0) {
      if (num1 > num2) {
        num1 %= num2;
        correctAnswer = num1 + num2;
      } else {
        num2 %= num1;
        correctAnswer = num1 + num2;
      }
    }
    return [question, correctAnswer];
  };

  playGame(noteToEvenGame, taskToEvenGame);
};

export default brainGcd;
