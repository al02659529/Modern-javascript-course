// object literals

let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@google.com',
    location: 'berlin',
    blogs: ['why love is futile', 'why you are gay']
};

// ACCESSING TO A WHOLE OBJECT
console.log(user);

// ACCESING TO AN OBJECT PROPERTY
console.log(user.name);

// CHANGING AN OBJECT PROPERTY
user.age = 35;
console.log(user.age);

// ACCESSING OBJECT PROPERTY USING BRACKET NOTATION
user['name'] = 'Daniel';
console.log(user['name']);

// BEST USE OF OBJECT BRACKET NOTATION IS WHEN USING A VARIABLE INTO IT
const key = 'location';
// user.key; < ----- WRONG
console.log(user[key]); // <----- RIGHT

// but most of the time it's just better to use object.property
console.log(user.email);
console.log(typeof user);