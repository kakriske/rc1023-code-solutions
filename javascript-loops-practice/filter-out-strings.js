/* exported filterOutStrings */
function filterOutStrings(values) {
  const finalNumberArray = [];
  const stringArray = [];
  for (let i = 0; i < values.length; i++) {
    const thingB = values[i];
    if (typeof values[i] === 'string') {
      stringArray.push(thingB);
    } else {
      finalNumberArray.push(thingB);
    }
  }
  return finalNumberArray;
}
