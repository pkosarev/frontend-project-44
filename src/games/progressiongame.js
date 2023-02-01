import logicOfGames from '../index.js';
import getRndInteger from '../random.js';

const gameRules = 'What number is missing in the progression?';
const lengthOfSeries = 10;

const getProgression = (stepCount, firstNumber) => {
  let numberOfProgression = firstNumber;
  const progression = [];
  for (let i = 0; i < lengthOfSeries; i += 1) {
    numberOfProgression += stepCount;
    progression.push(numberOfProgression);
  }
  return progression;
};

const hideElement = (progression, index) => {
  const copyProgression = progression;
  copyProgression[index] = '..';
  return copyProgression.join(' ');
};

const getRightCondition = () => {
  const stepCount = getRndInteger(1, 100);
  const firstNumber = getRndInteger(0, 100);
  const progression = getProgression(stepCount, firstNumber);
  const indexRandom = getRndInteger(0, progression.length - 1);
  const correctAnswer = String(progression[indexRandom]);
  const question = hideElement(progression, indexRandom);
  return { question, correctAnswer };
};

const progressionGame = () => {
  logicOfGames(gameRules, getRightCondition);
};

export default progressionGame;
