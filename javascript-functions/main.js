function convertMinutesToSeconds(minutes) {
  const seconds = minutes * 60;
  return seconds;
}
convertMinutesToSeconds(5);
console.log(convertMinutesToSeconds(5));

function greet(name) {
  return 'Hey, ' + name;
}
const nameBeavis = greet('Beavis');
console.log(nameBeavis);

function getArea(width, height) {
  const area = width * height;
  return area;
}
const areaResult = getArea(17, 42);
console.log(areaResult);

function getFirstName(person) {
  return person.firstName;
}
const person = {
  firstName: 'Lelouche',
  lastName: 'Lamperouge',
};
const personResult = getFirstName(person);
console.log(personResult);

function getLastElement(array) {
  return array[array.length - 1];
}
const stricklandPropane = ['propane', 'and', 'propane', 'accessories'];
const arrayResult = getLastElement(stricklandPropane);
console.log(arrayResult);
