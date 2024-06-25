/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Days {
  Sunday = 0,
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
}

const isWeekend = (day: Days): boolean => day % 6 === 0;

// console.log(isWeekend(Days.Sunday)); // true
// console.log(isWeekend(Days.Monday)); // false

export {};
