// Task is to loop through the P text and add either success or error class depending on the content

const content = document.querySelectorAll('p');

console.log(content.innerText);

content.forEach(text => {
    if(text.innerText.includes('error')){
        text.classList.add('error');
    }else if(text.innerText.includes('success')){
        text.classList.add('success');
    }
});

// toggle is for when you don't have a class it will add it, if it already have it then it will remove it

const title = document.querySelector('.title');
title.classList.toggle('randomClass');