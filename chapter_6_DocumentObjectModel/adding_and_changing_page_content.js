

//logging content of what is selected into console
// const para = document.querySelector('p');
// console.log(para.innerText);

// changing the content
// para.innerText = 'ninjas are awesome!';


// CHANGING THE CONTENT OF SELECTED CONTENT THROUGH A FUNCTION
// const paras = document.querySelectorAll('p');
// paras.forEach(para =>{
//     console.log(para.innerText);
//     para.innerText += ' new text';
// });

// CHANGING THE HTML
// let content = document.querySelector('.main-content');
// console.log(content.innerHTML);
// content.innerHTML += '<h2>This is a new title</h2>';

// Appending an array into HTML
let content = document.querySelector('.main-content');
const people = ['mario', 'luigi', 'yoshi'];
people.forEach(person =>{
    content.innerHTML += `<p>${person}</p>`;
});

// Getting the attribute
