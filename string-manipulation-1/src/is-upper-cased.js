/* exported isUpperCased */

/* Pseudocode:
Want a function with a parameter word, a string.
The return value will be a Boolean indicating whether or not
all characters are uppercased.
  Define a function, named isUpperCased, that accepts word as
  an argument.
  Write an if/else with a condition checking that the argument is
  uppercase. Return boolean value of true if uppercase.
  If not uppercase, return a boolean of false. */

function isUpperCased(word) {
  if (word === word.toUpperCase()) {
    return true;
  } else {
    return false;
  }
}
