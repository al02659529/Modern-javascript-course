// We wan't to cycle through the children of article and give it a class
const articleQuery = document.querySelector('article');

console.log(articleQuery.children); // this returns an html collection, which is not an array and we cannot loop through it

// we convert the html collection to an array
const articleArray = Array.from(articleQuery.children);

// We cycle through the array and add a new class
articleArray.forEach(child =>{
    child.classList.add('article-element');
});

const title = document.querySelector('h2');

console.log(title.parentElement);
console.log(title.parentElement.parentElement);
console.log(title.nextElementSibling);

// Chaining

console.log(title.nextElementSibling.parentElement.children);
