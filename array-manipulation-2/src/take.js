/* exported take */
function take(array, count) {
  if (array === 0) {
    return [];
  }
  const arrayFinal = [];
  for (let i = 0; i < count && i < array.length; i++) {
    arrayFinal.push(array[i]);
  }

  return arrayFinal;
}
