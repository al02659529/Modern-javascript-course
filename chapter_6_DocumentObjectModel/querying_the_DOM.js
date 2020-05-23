// get an element by ID

// const title = document.getElementById('page-title');
// console.log(title);

// // get element by their class name

// const errors = document.getElementsByClassName('error');
// console.log(errors);

// get elements by their tag name - ALL of the 3 selectors used return a html collection which cant be used with the for each function
const paras = document.getElementsByTagName('p');
console.log(paras);
console.log(paras[1]);

// get element by their CSS selector - returns a node list which we can use with for each
// const selex = document.querySelector("div.error");

// console.log(selex);