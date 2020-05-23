const button = document.querySelector('button');
const ul = document.querySelector('ul');
/*
button.addEventListener('click', () =>{
    console.log('you clicked me!');
});
*/


button.addEventListener('click', () =>{
    const li = document.createElement('li');
    li.textContent = 'something new to do';
    ul.append(li); // appends it to the bottom
    /* ul.prepend(li); // appends the item to the top */
});

const items = document.querySelectorAll('li');

/* Adding a new Li and adding a new evnt listener to it
items.forEach(item =>{
    item.addEventListener('click', e =>{
        // item.setAttribute('display', 'none');
        // console.log(e.target);
        // e.target.style.textDecoration = 'line-through';
        e.stopPropagation(); // This stops event bubbling
        e.target.remove();
    });
});
*/

ul.addEventListener('click', e =>{
    // console.log('event in UL');
    if(e.target.tagName === 'LI'){
        e.target.remove();
    }
});
