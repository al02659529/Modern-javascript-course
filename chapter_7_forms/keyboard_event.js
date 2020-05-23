const form = document.querySelector('.signup-form');
const usernamePattern = /^[a-zA-Z0-9]{6,10}$/;
// const username = document.querySelector('#username'); //1st way to get values of  afield

form.addEventListener('submit', eventParameter =>{
    eventParameter.preventDefault();
    // console.log(username.value);
    console.log(form.username.value); // 2nd way to get values from a field - Looking to the ID or name attribute user name field of the form
});

// live feedback

form.username.addEventListener('keyup', e =>{
   // console.log(e.target.value, form.username.value); prints the same value
    if(usernamePattern.test(e.target.value)){
        /*
        form.username.classList.add('formValidationValid');
        form.username.classList.remove('formValidationInvalid');
        My take, which is longer
         */
        // teacher's
        form.username.setAttribute('class', 'formValidationValid');
    }else {
        /*
        form.username.classList.add('formValidationInvalid');
        form.username.classList.remove('formValidationValid');
         */
        form.username.setAttribute('class', 'formValidationInvalid');
    }
});