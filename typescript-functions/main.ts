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
// console.log(getArea(10,5));
