/* exported oddOrEven */
function oddOrEven(numbers) {
  const completeArray = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      completeArray.push('even');
    } else {
      completeArray.push('odd');
    }
  }
  return completeArray;
}
