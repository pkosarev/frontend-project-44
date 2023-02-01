import logicOfGames from '../index.js';
import getRndInteger from '../random.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const testForPrime = (number) => {
  for (let i = number; i > 0; i -= 1) {
    if (number % i === 0 && i !== number && i !== 1) {
      return false;
    }
  }
  return true;
};

const getRightCondition = () => {
  const numberRandom = getRndInteger(1, 999);
  const question = numberRandom;
  const correctAnswer = testForPrime(numberRandom) ? 'yes' : 'no';
  return { question, correctAnswer };
};

const isPrime = () => {
  logicOfGames(gameRules, getRightCondition);
};

export default isPrime;
