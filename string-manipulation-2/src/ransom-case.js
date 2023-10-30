/* exported ransomCase */

/* Psuedocode:
Want a function that takes a parameter 'string'. The function will
return the string with every-other character uppercased.\
  Define the function and pass string as argument.
  You will end up with a new, modified string and will need a place
  to store it. Initialize an empty string.
  Use a for loop to iterate over each character of string.
  Check if the position of each character is odd or even.
  If position is even, lowercase the character. Add it to the defined string.
  If position is odd, uppercase the character. Add it to the defined string.
  Return the defined string. */

function ransomCase(string) {
  let storeString = '';
  for (let i = 0; i < string.length; i++) {
    if (i % 2 !== 0) {
      storeString = storeString + string[i].toUpperCase();
    } else {
      storeString = storeString + string[i].toLowerCase();
    }
  }
  return storeString;
}
