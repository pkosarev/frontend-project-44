import logicOfGames from '../index.js';
import getRndInteger from '../random.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const testForEven = (number) => (number % 2 === 0);

const getRightCondition = () => {
    const numberRandom = getRndInteger(0, 999);
    const question = numberRandom;
    const correctAnswer = testForEven(numberRandom) ? 'yes' : 'no';
    return { question, correctAnswer };
};

const isEven = () => {
    logicOfGames(gameRules, getRightCondition);
};

export default isEven;
