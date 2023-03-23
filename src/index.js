import readlineSync from 'readline-sync';

const playGame = (noteToGame, taskToGame) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(noteToGame);

  for (let i = 0; i < 3; i += 1) {
    const pairOfQuestionAndResult = taskToGame();
    console.log('Question:', pairOfQuestionAndResult[0]);
    const answer = readlineSync.question('Your answer: ');

    const correctAnswer = pairOfQuestionAndResult[1];

    if (answer.toString() === correctAnswer.toString()) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default playGame;
