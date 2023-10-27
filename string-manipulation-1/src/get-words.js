/* exported getWords */
function getWords(string) {
  if (string === '') {
    return [];
  } else {
    const seperateWord = string.split(' ');

    return seperateWord;
  }
}
