interface studentProps {
  firstName: string;
  lastName: string;
  age: number;
  livesInIrvine?: boolean;
  previousOccupation?: string;
}

const student: studentProps = {
  firstName: 'Kyle',
  lastName: 'Kriske',
  age: 85,
};

const fullName: string = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);
student.livesInIrvine = false;
student.previousOccupation = 'driver';
console.log(student.livesInIrvine);
console.log(student.previousOccupation);
console.log(student);

interface Vehicle {
  make: string;
  model: string;
  year: number;
  color?: string;
  isConvertible?: boolean;
}

const vehicle: Vehicle = {
  make: 'toyota',
  model: 'camry',
  year: 1987,
};

vehicle['color'] = 'orange';
console.log(vehicle['color']);
vehicle['isConvertible'] = true;
console.log(vehicle['isConvertible']);
console.log(vehicle);

interface Pet {
  name?: string;
  kind?: string;
}

const pet: Pet = {
  name: 'rizzo',
  kind: 'dog',
};

delete pet.name;
delete pet.kind;
console.log(pet);
