/* exported getValue */

/* Psuedocode:
Want a function with two parameters, object, and key.
The return value will be the key value of the object.
  Define the function and pass two arguments: object and key.
  Assign a variable and set its value to the key value of the
  object.
  Return the variable. */

function getValue(object, key) {
  const objectOne = object[key];
  return objectOne;
}
