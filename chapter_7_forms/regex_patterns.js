const form = document.querySelector('.signup-form');
// const username = document.querySelector('#username'); //1st way to get values of  afield

form.addEventListener('submit', eventParameter =>{
    eventParameter.preventDefault();
    // console.log(username.value);
    console.log(form.username.value); // 2nd way to get values from a field - Looking to the ID or name attribute user name field of the form
});

// testing RegEx
const username = 'shau1nT12';
const pattern = /^[a-zA-Z0-9]{6,10}$/; /*
The ^ means that it must match a pattern like this from the beginning
the $ means that it must end with this pattern
inside the [] we pust the characters that are allowed
and inside the {} the length {min, max}
*/

/*
Testing first method to check if a value pass the pattern
let result = pattern.test(username); // this returns either true of false if the value matches the pattern

// testing
if(result){
    console.log('regex test passed :)');
}else {
    console.log('regex test didn\'t pass :(');
}

 */

/* With this method we are going to check the pattern directly on the value
it will return:
*-1 if the value is false
otherwise >=0 depending on the regex test

let result = username.search(pattern);

 */