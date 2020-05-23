const form = document.querySelector('.signup-form');
// const username = document.querySelector('#username'); //1st way to get values of  afield

form.addEventListener('submit', eventParameter =>{
    eventParameter.preventDefault();
     // console.log(username.value);
    console.log(form.username.value); // 2nd way to get values from a field - Looking to the ID or name attribute user name field of the form
});