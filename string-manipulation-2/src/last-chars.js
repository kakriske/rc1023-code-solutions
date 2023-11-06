/* exported lastChars */
function lastChars(length, string) {
  let result = '';
  const spot = Math.max(0, string.length - length);
  for (let i = spot; i < string.length; i++) {
    result += string.charAt(i);
  }
  return result;
}
