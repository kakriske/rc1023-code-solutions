function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
var convertMinutesToSecondsResult = convertMinutesToSeconds(5);
console.log('convertMinutesToSecondsResult:', convertMinutesToSecondsResult);
function greet(name) {
  return 'Hey, ' + name;
}
var greetResult = greet('Beavis');
console.log(greetResult);
function getArea(width, height) {
  // const area: number = width * height;
  // return area;
  return width * height;
}
var getAreaResult = getArea(5, 10);
console.log('getAreaResult:', getAreaResult);
function getFirstName(person) {
  return person.firstName;
}
var nameMan = {
  firstName: 'Lelouche',
  lastName: 'Lamperouge',
};
var getFirstNameResult = getFirstName(nameMan);
console.log(getFirstNameResult);
// function getLastElement(array: number[]): number {
//   if (array.length > 0) {
//     return array[array.length - 1];
//   } else {
//     return undefined;
//   }
// }
// const numbersArray: number[] = [0, 1, 2, 3, 4];
// const lastNumber: number = getLastElement(numbersArray);
// console.log(lastNumber);
