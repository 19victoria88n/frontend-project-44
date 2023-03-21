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
const isEven = (n) => {
  if (n % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
};

const getAnswer = () => {
  answer = readlineSync.question('Your answer: ');
};

const gameRound = () => {
  const num = getRandomNumber();
  isEven(num);
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

const evenGame = () => {
  greeting();
  gameRound();
};

export default evenGame;
