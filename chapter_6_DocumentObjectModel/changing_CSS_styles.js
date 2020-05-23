const title = document.querySelector('main > p');

console.log(title.style.color)

//This is bad bc it overrides all of the styles
// title.setAttribute('style', 'margin:50px');

// This is great because this way we can add a new style without altering the other ones
title.style.margin = '50px';
title.style.color  = 'crimson';
title.style.fontSize = '13px';

// deleting a property - We set it to an empty string
title.style.margin = '';