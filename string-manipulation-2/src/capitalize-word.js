/* exported capitalizeWord */

/* Psuedocode:
Want a function that takes a single parameter, string, and returns
a value of a the first string, but the first character is uppercase,
while the rest of the characters are lowercase. With a special case that
JavaScript is always written as JavaScript and not Javascript.
  Define the function and pass word as parameter.
  Check if the word is javascript. If it is, have it returned to proper
  spelling.
  Declare a variable and assign its value to the uppercase of first character
  Declare another variable and assign its value to lowercase of rest of characters
  Declare a final variable and concatenate it with the previous two variables.
  return the final variable. */

function capitalizeWord(word) {
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  }
  const firstChar = word.charAt(0).toUpperCase();
  const restChar = word.slice(1).toLowerCase();
  const newWord = firstChar + restChar;
  return newWord;
}
