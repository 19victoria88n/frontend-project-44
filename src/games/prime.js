import playGame from '../index.js';

const brainPrime = () => {
  const noteToPrimeGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const getRandomNumber = () => Math.round(Math.random() * 10);

  function isPrime(num) {
    let result = 0;
    for (let i = 1; i < num; i += 1) {
      if (num % i === 0) {
        result = i;
      }
    }
    if (result === 1) {
      return 'yes';
    }
    return 'no';
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
