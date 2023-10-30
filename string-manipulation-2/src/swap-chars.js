/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  const array = string.split('');
  const swap = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = swap;
  return array.join('');
}
