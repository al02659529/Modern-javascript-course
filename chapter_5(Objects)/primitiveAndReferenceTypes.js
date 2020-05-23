// primitive values - Strings, numbers, booleans, null, undefined, symbols

let scoreOne = 50;
let scoreTwo = scoreOne; // it creates a copy of the value of scoreOne

scoreTwo = 30; // Only the second gets changed

console.log(`scoreOne: ${scoreOne}, scoreTwo: ${scoreTwo}`);

// reference values
// Objects literals, arrays, functions, dates, all other objects

const userOne = {name: 'daniel', age: 30};
const userTwo = userOne; // it creates a pointer to the userOne because it's a reference value, an object

console.log(userOne, userTwo);

userTwo.age = 40;

console.log(userOne, userTwo); // If you change the value of one, the value of the other will change