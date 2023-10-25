const number1 = 1;
const number2 = 2;
const number3 = 96;
const maximumValue = Math.max(number1, number2, number3);
console.log('maximumValue:', maximumValue);
const heroes = ['Quailman', 'Batman', "Jared Leto's Joker HAHA jk", 'Catman'];
let randomNumber = Math.random();
randomNumber *= heroes.length;
const randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);
const randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

const library = [
  { title: 'Nineteen Eighty-Four', author: 'George Orwell' },
  { title: 'It', author: 'Stephen King' },
  { title: 'Brave New World', author: 'George Orwell' },
];
const lastBook = library.pop();
console.log('lastBook:', lastBook);
const firstBook = library.shift();
console.log('firstBook:', firstBook);

const js = {
  title: 'Javascript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS secrets',
  author: 'Lea Verou',
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library:', library);

const fullName = 'Kyle Kriske';
const firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);
const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
