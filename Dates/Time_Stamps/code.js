//timestamps
const before = new Date('Febuary 1 2019 7:30:59');
const now = new Date();

// console.log(now.getTime(), before.getTime());
// since 12:00 01/01/1970

const diff = now.getTime() - before.getTime()

console.log(diff);

const mins = Math.round(diff /1000 / 60);
const hours = Math.round(mins / 60);
const days = Math.round(hours/24)

console.log(mins);
console.log(hours);
console.log(days);


// convertin timestamps into date objects
console.log(before);
console.log( new Date(before.getTime()));
