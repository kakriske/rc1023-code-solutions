/* exported take */

/* Psuedocode:
Want a function with two parameters that will return a value of an array containing
a 'count' amount of the 'array' plugged in.
Write the function and give it two parameters: array and count.
Initialize an array to store values.
Go through each element of array up to count elements.
Put those elements in the new array.
Return that array. */

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
