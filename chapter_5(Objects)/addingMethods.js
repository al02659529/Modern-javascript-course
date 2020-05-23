// object literals
// array of objects
// const blogs = [
//     {
//         title: 'why love is futile', likes: 30
//     },
//     {
//         title: 'why you are gay', likes: 1000
//     }
// ];

let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@google.com',
    location: 'berlin',
    blogs: [{
        title: 'why love is futile', likes: 30
    },
        {
            title: 'why you are gay', likes: 1000
        }],
    // adding a method - normal way regular function
    login: function () {
        console.log('the user logged in');
    },
    // we can also delete function and : and just use the () after the function name
    logout() {
        console.log('The user logged out');
    },
    logBlogs: function () {

        console.log('The user has written the following blogs: ');
        // using arrow functions is only ok with methods inside regular functions, not at the beginning bc "this" will not work
       // This function is for iterating over an array
        this.blogs.forEach( blog => {
            console.log(blog.title, 'with:', blog.likes, 'likes');
     });
    }
};

user.login();
user.logout();
user.logBlogs();