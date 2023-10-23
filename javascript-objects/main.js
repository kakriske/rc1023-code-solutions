const student = {
  firstName: 'Kyle',
  lastName: 'Kriske',
  age: 39,
};
const fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);
student.livesInIrvine = false;
student.previousOccupation = 'driver';
console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);

const vehicle = {
  make: 'Toyota',
  model: 'Camry',
  year: 1999,
};
vehicle['color'] = 'green';
vehicle['isConvertible'] = false;
console.log('value of vehicle[color]:', vehicle['color']);
console.log('value of isConvertible:', vehicle['isConvertible']);
console.log(vehicle);

const pet = {
  name: 'Kiki',
  type: 'Dog',
};
delete pet.name;
delete pet.type;
console.log(pet);
