const business = {
  opens: '8am',
  closes: '5pm',
  totalEmployees: 4,
  daysOpen: ['M', 'W', 'F'],
  employees: {
    shawn: { position: 'sales', daysOfWeekWorking: ['M', 'W', 'F'] },
    alex: { position: 'design', daysOfWeekWorking: ['M', 'W', 'F'] },
    dan: { position: 'engineer', daysOfWeekWorking: ['M', 'W', 'F'] },
    jane: { position: 'engineer', daysOfWeekWorking: ['M', 'W', 'F'] },
  },
};

function addWeekends() {
  business.daysOpen.push('Sat');
  business.daysOpen.push('Sun');
  for (const employee in business.employees) {
    const currentEmployee = business.employees[employee];
    currentEmployee.daysOfWeekWorking.push('Sat');
    currentEmployee.daysOfWeekWorking.push('Sun');
  }
}
addWeekends();

// function addEmployees() {
//   const xhr = new XMLHttpRequest();
//   xhr.open('GET', 'http://jsonplaceholder.typicode.com/users');
//   xhr.responseType = 'json';
//   xhr.addEventListener('load', function() {
//     for (let i = 0; i <= 4; i++) {
//       const currentEmployee = xhr.response[i];
//     }
//   })
// }
