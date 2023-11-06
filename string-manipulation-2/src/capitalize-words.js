/* exported capitalizeWords */
function capitalizeWords(string) {
  const words = string.split(' ');
  const capitalizeWords = [];
  for (const word of words) {
    const capitalizedWord =
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    capitalizeWords.push(capitalizedWord);
  }
  return capitalizeWords.join(' ');
}
