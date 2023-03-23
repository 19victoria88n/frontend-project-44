import playGame from '../index.js';

const evenGame = () => {
  const noteToEvenGame = 'Answer "yes" if the number is even, otherwise answer "no".';

  const getRandomNumber = () => Math.round(Math.random() * 10);

  const taskToEvenGame = () => {
    const num = getRandomNumber();

    const question = `Question: ${num}`;

    let correctAnswer = '';
    if (num % 2 === 0) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }

    return [question, correctAnswer];
  };

  playGame(noteToEvenGame, taskToEvenGame);
};

export default evenGame;
