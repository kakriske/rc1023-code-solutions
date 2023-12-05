const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];
values.forEach((elements) => console.log(elements));

values.forEach((element, index) => {
  const reverseOrder = values[values.length - 1 - index];
  console.log(reverseOrder);
});
