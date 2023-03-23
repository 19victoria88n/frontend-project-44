import playGame from '../index.js';

const brainPrime = () => {
  const noteToPrimeGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const getRandomNumber = () => Math.round(Math.random() * 10);

  function isPrime(num) {
    if (num === 1) {
      return 'no';
    }
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) {
        return 'no';
      }
    }
    return 'yes';
  }

  const taskToPrimeGame = () => {
    const num = getRandomNumber();
    const question = `${num}`;
    const correctAnswer = isPrime(num);
    return [question, correctAnswer];
  };

  playGame(noteToPrimeGame, taskToPrimeGame);
};

export default brainPrime;
