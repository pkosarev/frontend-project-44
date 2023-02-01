import readlineSync from 'readline-sync';

const attemptsNumber = 3;

const logicOfGames = (gameRules, generateRoundData) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name: ');
  console.log(`Hello, ${name}!`);
  console.log(gameRules);

  for (let i = 0; i < attemptsNumber; i += 1) {
    const { question, correctAnswer } = generateRoundData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default logicOfGames;
