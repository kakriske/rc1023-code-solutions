/* exported filterOutNulls */
function filterOutNulls(values) {
  const finalArray = [];
  const nullArray = [];
  for (let i = 0; i < values.length; i++) {
    const thingA = values[i];
    if (values[i] !== null) {
      finalArray.push(thingA);
    } else {
      nullArray.push(thingA);
    }
  }
  return finalArray;
}
