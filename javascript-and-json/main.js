const books = [
  {
    isbn: '978-553-21311-0',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
  },
  {
    isbn: '978-1-234567-89-0',
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
  },
  {
    isbn: '978-0-0618-64961-9',
    title: '1984',
    author: 'George Orwell',
  },
];

console.log('book:', books);
console.log('typeof:', typeof books);

const stringifyBooks = JSON.stringify(books);
console.log('stringresult:', stringifyBooks);
console.log('typeof:', typeof stringifyBooks);

const studentString = '{"id":12340, "name":"kyle"}';
console.log('student:', studentString);
console.log('typeof:', typeof studentString);

const studentObject = JSON.parse(studentString);
console.log(studentObject);
console.log('studentObject:', studentObject);
console.log('typeof:', typeof studentObject);
