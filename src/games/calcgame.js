import logicOfGames from '../index.js';
import getRndInteger from '../random.js';

const gameRules = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

const getResultOperation = (number1, number2, operation) => {
  switch (operation) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`operation ${operation} is not supported`);
  }
};

const generateRoundData = () => {
  const randomOperation = operations[getRndInteger(0, operations.length - 1)];
  const randomNumber1 = getRndInteger(0, 999);
  const randomNumber2 = getRndInteger(0, 999);
  const question = `${randomNumber1} ${randomOperation} ${randomNumber2}`;
  const correctAnswer = String(getResultOperation(randomNumber1, randomNumber2, randomOperation));
  return { question, correctAnswer };
};

const calcGame = () => {
  logicOfGames(gameRules, generateRoundData);
};

export default calcGame;
