/* exported compact */

/* Psuedocode:
Want a function that filters out falsy values. Returns original array
minus the falsy values.
  Define the function.
  Give it one argument, array.
  Define two empty arrays and give one truthy values
  and the other falsy values.
  Loop through the array to check for falsy values.
  If the values are falsy push into falsy array.
  The rest of the values are pushed into truthy array.
  Return truthy array. */

function compact(array) {
  const truthyArray = [];
  const falsyArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!array[i]) {
      falsyArray.push(array[i]);
    } else {
      truthyArray.push(array[i]);
    }
  }
  return truthyArray;
}
