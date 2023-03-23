import playGame from '../index.js';

const arrayRandElement = (arr = ['+', '-', '*']) => {
  const rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
};

const brainCalc = () => {
  const noteToEvenGame = 'What is the result of the expression?';

  const getRandomNumber = () => Math.round(Math.random() * 10);

  const taskToEvenGame = () => {
    const num1 = getRandomNumber();
    const num2 = getRandomNumber();
    const mathSign = arrayRandElement();
    const question = `${num1} ${mathSign} ${num2}`;
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
    }
    return [question, correctAnswer];
  };

  playGame(noteToEvenGame, taskToEvenGame);
};

export default brainCalc;
