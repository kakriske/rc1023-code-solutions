/* exported reverse */
function reverse(array) {
  const lastArray = [];
  let j = 0;
  for (let i = array.length - 1; i >= 0; i--) {
    lastArray[j] = array[i];
    j++;
  }
  return lastArray;
}
