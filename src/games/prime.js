import playGame from '../index.js';

const brainPrime = () => {
  const noteToEvenGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const getRandomNumber = () => Math.round(Math.random() * 10);

  const isPrime = (n) => {
    let correctAnswer = 0;
    let sum = 0;
    for (let i = 2; i < n; i += 1) {
      if (n % i === 0 && i < n) {
        sum += 1;
      }
    }
    if (sum < 1) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }
    if (n === 1) {
      correctAnswer = 'no';
    }
    if (n === 2) {
      correctAnswer = 'yes';
    }
    return correctAnswer;
  };

  const taskToEvenGame = () => {
    const num = getRandomNumber();
    const question = `${num}`;
    let correctAnswer = isPrime(num);
    return [question, correctAnswer];
  };

  playGame(noteToEvenGame, taskToEvenGame);
};

export default brainPrime;
