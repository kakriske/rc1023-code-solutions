/* exported reverseWord */
function reverseWord(word) {
  let reverseWord = '';
  for (let i = word.length - 1; i >= 0; i--) {
    reverseWord = reverseWord + word[i];
  }
  return reverseWord;
}
