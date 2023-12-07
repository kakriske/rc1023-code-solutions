function convertMinutesToSeconds(minutes: number): number {
  return minutes * 60;
}

const convertMinutesToSecondsResult: number = convertMinutesToSeconds(5);
console.log('convertMinutesToSecondsResult:', convertMinutesToSecondsResult);

function greet(name: string): string {
  return 'Hey, ' + name;
}

const greetResult: string = greet('Beavis');
console.log(greetResult);

function getArea(width: number, height: number): number {
  // const area: number = width * height;
  // return area;
  return width * height;
}

const getAreaResult: number = getArea(5, 10);
console.log('getAreaResult:', getAreaResult);

function getFirstName(person: { firstName: string; lastName: string }): string {
  return person.firstName;
}
const nameMan: { firstName: string; lastName: string } = {
  firstName: 'Lelouche',
  lastName: 'Lamperouge',
};
const getFirstNameResult: string = getFirstName(nameMan);
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
