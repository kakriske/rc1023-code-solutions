/* exported numVowels */
function numVowels(string) {
  const storage1 = [];
  const storage2 = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] === 'a') {
      storage1.push(string[i]);
    } else if (string[i] === 'A') {
      storage1.push(string[i]);
    } else if (string[i] === 'e') {
      storage1.push(string[i]);
    } else if (string[i] === 'E') {
      storage1.push(string[i]);
    } else if (string[i] === 'i') {
      storage1.push(string[i]);
    } else if (string[i] === 'I') {
      storage1.push(string[i]);
    } else if (string[i] === 'o') {
      storage1.push(string[i]);
    } else if (string[i] === 'O') {
      storage1.push(string[i]);
    } else if (string[i] === 'u') {
      storage1.push(string[i]);
    } else if (string[i] === 'U') {
      storage1.push(string[i]);
    } else {
      storage2.push(string[i]);
    }
  }
  return storage1.length;
}
