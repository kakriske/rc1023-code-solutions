/* exported capitalize */

/* Psuedocode:
Want a function with one parameter, word. Word is a string.
The return value will be the string word, but only the first character
is to be uppercase.
  One could find the first character of word
  Make sure it is capatilized
  The rest of the word will be concatenated with the initial uppercase character
  If this is to be carried out, the first character needs to be cut out
  Verify the remaining characters are lower case. */

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}
