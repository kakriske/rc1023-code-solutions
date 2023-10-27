/* exported initial */
function initial(array) {
  const finalArray = [];
  let j = 0;
  for (let i = 0; i < array.length - 1; i++) {
    finalArray[j] = array[i];
    j++;
  }
  return finalArray;
}
