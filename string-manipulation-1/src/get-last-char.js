/* exported getLastChar */
/* Pseudocode:
want a function that takes one parameter, a string. The function will
return the last character of the string
  One will need to find the last character of the string
  Store that value
  Return that value. */

function getLastChar(string) {
  const lastLetter = string[string.length - 1];
  return lastLetter;
}
