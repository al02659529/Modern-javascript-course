// dates & times

const now = new Date();

// year, months, day, times

console.log('getFullYear: ', now.getFullYear());
console.log('getMonth: ', now.getMonth());
console.log('getDate ', now.getDate());
console.log('getDay: ', now.getDay());
console.log('getHours: ', now.getHours());
console.log('getMinutes: ', now.getMinutes());
console.log('getSeconds: ', now.getSeconds());

// timeStamps
console.log('timestamp: ', now.getTime());

// date string
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());