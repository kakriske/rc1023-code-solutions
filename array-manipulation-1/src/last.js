/* exported last */

/* Pseudocode:
Want a function that takes an array as an argument and
returns the last element of the array.
  Define a funtion with the parameter of array.
  Assign a variable to the value of the last element of the
  array.
  Return that variable. */

function last(array) {
  const lastElement = array[array.length - 1];
  return lastElement;
}
