import readlineSync from 'readline-sync';

let answer = '';
let name = '';
let score = 0;

const getRandomNumber = () => Math.round(Math.random() * 100);

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\nFind the greatest common divisor of given numbers.`);
};

const getAnswer = () => {
  answer = readlineSync.question('Your answer: ');
};

const gameRound = () => {
  let num1 = getRandomNumber();
  let num2 = getRandomNumber();
  console.log(`Question: ${num1} ${num2}`);
  getAnswer();
  let correctAnswer = 0;
  while ((num1 !== 0) && (num2 !== 0)) {
    if (num1 > num2) {
      num1 %= num2;
      correctAnswer = num1 + num2;
    } else {
      num2 %= num1;
      correctAnswer = num1 + num2;
    }
  }

  if (answer.toString() === correctAnswer.toString()) {
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

const brainGcd = () => {
  greeting();
  gameRound();
};

export default brainGcd;
