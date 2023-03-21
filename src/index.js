import readlineSync from 'readline-sync';

let answer = '';
let name = '';
let score = 0;

const getRandomNumber = () => Math.round(Math.random() * 100);

const arrayRandElement = (arr = ['+', '-', '*']) => {
  const rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
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
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const mathSign = arrayRandElement();
  console.log(`Question: ${num1} ${mathSign} ${num2}`);
  getAnswer();
  let correctAnswer = 0;
  switch (mathSign) {
    case '+':
      correctAnswer = num1 + num2;
      break;
    case '-':
      correctAnswer = num1 - num2;
      break;
    case '*':
      correctAnswer = num1 * num2;
      break;
    default:
      correctAnswer = null;

      return correctAnswer;
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

const brainCalc = () => {
  greeting();
  gameRound();
};

export default brainCalc;
