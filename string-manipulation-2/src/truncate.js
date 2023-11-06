/* exported truncate */
/* Psuedocode:
Want a function that takes two parametes: length and string.
The function will return a a string that is similar to the first string
but cut at length and has a ellipsis attached.
  Define the function and pass length and string as arguments.
  Take the string argument and cut it off at length.
  Concatenate the new variable with ellipsis.
  Assign that to a new variable.
  Return variable.
  */

function truncate(length, string) {
  const finalString = string.slice(0, length) + '...';
  return finalString;
}
