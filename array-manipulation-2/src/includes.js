/* exported includes */

/* Psuedocode:
Want a function that takes an array and a value to search in for in the array.
The function will return a boolean indicating if the 'value' is in the array.
Write out the funtion with a name of includes and two parameters: array and value.
Loop through the array and check if any index is equal to value.
If it hits, return true.
If not, return false. */

function includes(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
