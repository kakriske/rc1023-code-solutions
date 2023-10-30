/* exported tail */

/* Psuedocode:
Have a function with one argument, an array called 'array'.
The return value will be a new array containing all the original
array's elements except for the first element.
  Define the function with argument, array. */

function tail(array) {
  const arrayOne = [];
  let j = 0;
  for (let i = 1; i < array.length; i++) {
    arrayOne[j] = array[i];
    j++;
  }
  return arrayOne;
}
