import playGame from '../index.js';

const brainPrime = () => {
  const noteToEvenGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const getRandomNumber = () => Math.round(Math.random() * 10);

  const taskToEvenGame = () => {
    const num = getRandomNumber();
    const question = `${num}`;
    let correctAnswer = 0;
    let sum = 0;
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0 && i < num) {
        sum += 1;
      }
    }
    if (sum < 1) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }
    if (num === 1) {
      correctAnswer = 'no';
    }
    if (num === 2) {
      correctAnswer = 'yes';
    }
    return [question, correctAnswer];
  };

  playGame(noteToEvenGame, taskToEvenGame);
};

export default brainPrime;
