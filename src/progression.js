import readlineSync from 'readline-sync';

let answer = '';
let name = '';
let score = 0;

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\nWhat number is missing in the progression?`);
};

const getRandomNumber = () => Math.round(Math.random() * 10);

const arrayRand = (arrRand = [getRandomNumber()], osnovanie = getRandomNumber()) => {
  for (let i = 1; i < 10; i += 1) {
    arrRand[i] = arrRand[i - 1] + osnovanie;
  }
  return arrRand;
};

let correctAnswer = 0;
const newArr = (newArr = arrayRand(), num1 = getRandomNumber()) => {
  correctAnswer = newArr[num1];
  newArr[num1] = '..';
  return newArr.join(' ');;
};

const getAnswer = () => {
  answer = readlineSync.question('Your answer: ');
};

const gameRound = () => {
  const arr = newArr();
  console.log(`Question: ${arr}`);
  getAnswer();

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
