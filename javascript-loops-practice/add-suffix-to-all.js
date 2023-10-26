/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  const wordsPlusSuffix = [];
  for (let i = 0; i < words.length; i++) {
    const wordPlus = words[i] + suffix;
    wordsPlusSuffix.push(wordPlus);
  }
  return wordsPlusSuffix;
}
