import { takeAChance } from './take-a-chance.js';

const promise = takeAChance('kyle');

promise
  .then((message) => console.log(message))
  .catch((error) => console.log(error.message));
