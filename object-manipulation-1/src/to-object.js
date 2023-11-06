/* exported toObject */
function toObject(keyValuePair) {
  const finalObject = {};
  finalObject[keyValuePair[0]] = keyValuePair[1];
  return finalObject;
}
