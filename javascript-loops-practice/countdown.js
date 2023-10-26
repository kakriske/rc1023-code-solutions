/* exported countdown */
function countdown(number) {
  const array1 = [];
  while (number >= 0) {
    array1.push(number);
    number--;
  }
  return array1;
}
