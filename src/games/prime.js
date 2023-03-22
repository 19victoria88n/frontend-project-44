import readlineSync from 'readline-sync';

let answer = '';
let name = '';
let score = 0;

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\nAnswer "yes" if given number is prime. Otherwise answer "no".`);
};

const getRandomNumber = () => Math.round(Math.random() * 10);

let correctAnswer = '';
const isPrime = (n) => {
  let sum = 0;
  for (let i = 2; i < n; i += 1) {
    if ((n % i === 0) && (i < n)) {
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
};

const getAnswer = () => {
  answer = readlineSync.question('Your answer: ');
};

const gameRound = () => {
  const num = getRandomNumber();
  isPrime(num);
  console.log(`Question: ${num}`);
  getAnswer();
  if (answer === correctAnswer) {
    console.log('Correct!');
    score += 1;
    checkScore();
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
  }
};

const checkScore = () => {
  if (score === 3) {
    console.log(`Congratulations, ${name}!`);
  } else {
    gameRound();
  }
};

const brainPrime = () => {
  greeting();
  gameRound();
};
export default brainPrime;
