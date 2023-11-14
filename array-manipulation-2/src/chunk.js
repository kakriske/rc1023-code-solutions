/* exported chunk */
function chunk(array, size) {
  const result = [];
  let subArray = [];
  for (let i = 0; i < array.length; i++) {
    if (subArray.length < size) {
      subArray.push(array[i]);
    } else {
      result.push(subArray);
      subArray = [array[i]];
    }
  }
  if (subArray.length > 0) {
    result.push(subArray);
  }
  return result;
}
