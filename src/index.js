import readlineSync from 'readline-sync';

let answer = '';
let name = '';
let score = 0;

const getRandomNumber = () => {
  return Math.round(Math.random() * 100);
};

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\nWhat is the result of the expression?`);
};

const getAnswer = () => {
  answer = readlineSync.question('Your answer: ');
};

const gameRound = () => {
  const num1 = getRandomNumber(); // Генерация случайного числа
  const num2 = getRandomNumber();
  console.log(`Question: ${num1} + ${num2}`);
  getAnswer();
  const correctAnswer = num1 + num2;
  if (answer.toString() === correctAnswer.toString()) {
    console.log('Correct!');
    score += 1;
    checkScore();
  } else {
    console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${name}!`);
  }
};

const checkScore = () => {
  if (score === 3) {
    console.log(`Congratulations, ${name}!`);
  } else {
    gameRound();
  }
};

const brainCalc = () => {
  greeting();
  gameRound();
};

export default brainCalc;
