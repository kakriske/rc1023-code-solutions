/* exported drop */
function drop(array, count) {
  const arrayKeep = [];
  const arrayDrop = [];
  for (let i = 0; i < array.length; i++) {
    if (i < count) {
      arrayDrop.push(array[i]);
    } else {
      arrayKeep.push(array[i]);
    }
  }
  return arrayKeep;
}
