var student = {
  firstName: 'Kyle',
  lastName: 'Kriske',
  age: 85,
};
var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);
student.livesInIrvine = false;
student.previousOccupation = 'driver';
console.log(student.livesInIrvine);
console.log(student.previousOccupation);
console.log(student);
var vehicle = {
  make: 'toyota',
  model: 'camry',
  year: 1987,
};
vehicle['color'] = 'orange';
console.log(vehicle['color']);
vehicle['isConvertible'] = true;
console.log(vehicle['isConvertible']);
console.log(vehicle);
var pet = {
  name: 'rizzo',
  kind: 'dog',
};
delete pet.name;
delete pet.kind;
console.log(pet);
