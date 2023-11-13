/* exported drop */

/* Psuedocode:
Want a function that takes an array and a postive number, 'count' as parameters. The return value
will be a new array containing the elements of array after the first 'count' elements.
Write out a function called drop with two parameters, array and count.
Define two new array's to store the elements.
Loop through the argument array and for each element that is smaller than count
put it in an array.
For the elements larger than count put into another array.
Return the array with elements that are larger than count. */

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
