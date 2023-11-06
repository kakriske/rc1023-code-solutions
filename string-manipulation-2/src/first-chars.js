/* exported firstChars */
/* Psuedocode:
Want a function with two parameters. Length and string.
The return value will be length amount of initial string characters.
  Define function and pass two parameters. Sting and length.
  Starting at first character and going to length character, take
  out the characters and assign them to a variable.
  Return the variable. */

function firstChars(length, string) {
  const firstChars = string.slice(0, length);
  return firstChars;
}
