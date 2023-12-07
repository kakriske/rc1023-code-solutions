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
// console.log(getArea(10,5));
