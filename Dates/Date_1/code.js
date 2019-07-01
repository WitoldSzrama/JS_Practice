//dates & times
const now =  new Date();

console.log(now);


// year,months, day, times

console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
// timestamps

console.log(now.getTime()); //how many seconds since 01.01.1970

//datestring

console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());


//date-fns
console.log(dateFns.isToday(now));


// formating option in date-Fns
console.log(dateFns.format(now, 'YYYY'));
console.log(dateFns.format(now, 'MMMM'));
console.log(dateFns.format(now, 'dddd'));
console.log(dateFns.format(now, 'Do'));

console.log(dateFns.format(now, 'dddd Do MMMM YYYY'));

//compering Dates

const befor = new Date('Febuary 1 2019 12:00:00');

console.log(dateFns.distanceInWords(now, before));
