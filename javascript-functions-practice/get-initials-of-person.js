/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  const personFirstName = person.firstName;
  const personLastName = person.lastName;
  return personFirstName.at(0) + personLastName.at(0);
}
