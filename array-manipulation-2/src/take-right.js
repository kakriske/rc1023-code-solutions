/* exported takeRight */
function takeRight(array, count) {
  const arrayRight = [];
  for (let i = array.length - 1; i >= 0 && count > 0; i--, count--) {
    arrayRight.push(array[i]);
  }
  return arrayRight.reverse();
}
