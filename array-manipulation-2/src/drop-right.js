/* exported dropRight */
function dropRight(array, count) {
  const keepArray = [];
  for (let i = 0; i < array.length - count; i++) {
    keepArray.push(array[i]);
  }
  return keepArray;
}
