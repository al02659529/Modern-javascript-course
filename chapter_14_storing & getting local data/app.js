// store data in local storage

localStorage.setItem('name', 'mario');
localStorage.setItem('age', 50);


// GET DATA FROM LOCAL STORAGE

let name = localStorage.getItem('name');
console.log(name);

// UPDATING DATA
localStorage.setItem('name', 'luigi'); // if key exists it overwrites value


// Deleting data from local storage

localStorage.removeItem('age');

// localStorage.clear(); // clears all local storage

