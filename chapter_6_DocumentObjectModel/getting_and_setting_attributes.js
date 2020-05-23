const link = document.querySelector("main > a");

// Getting attribute
console.log(link.getAttribute('href'));

// Changing attribute value
link.setAttribute('href', 'https//www.thenetninja.co.uk');
// changing text inside tag
link.innerText = 'The net ninja website';

const mssg = document.querySelector('main > p');
mssg.setAttribute('class', 'accepted');

// Loop to set condition if class accepted green text, otherwise it will be red
if(mssg.getAttribute('class') === 'accepted'){
    mssg.setAttribute('style', 'color:green');
}else {
    mssg.setAttribute('style', 'color: red');
}

