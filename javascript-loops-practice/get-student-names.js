/* exported getStudentNames */
function getStudentNames(students) {
  const finalNameArray = [];
  for (let i = 0; i < students.length; i++) {
    const something = students[i].name;
    finalNameArray.push(something);
  }
  return finalNameArray;
}
