console.log('hello, world');
const $firstQuery = document.querySelector('h1');
console.log('h1:', $firstQuery);
console.dir($firstQuery);

const $idQuery = document.querySelector('#explanation');
console.log('#explanation:', $idQuery);
console.dir($idQuery);

const $classQuery = document.querySelector('.hint');
console.log('.hint:', $classQuery);
console.dir($classQuery);

const $pAll = document.querySelectorAll('p');
console.log('paragraphs:', $pAll);

const $classAll = document.querySelectorAll('.example-link');
console.log('.example-link:', $classAll);
