import readlineSync from 'readline-sync';

const userName = readlineSync.question('Your answer: ');
console.log(`Hello, ${userName}!`);
