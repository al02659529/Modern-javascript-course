class User {
    constructor(username, email){
        this.username = username;
        this.email = email;
        this.score = 0;
    }
    login(){
        console.log(`${this.username} just logged in`);
        return this;
    }
    logout(){
        console.log(`${this.username} just logged out`);
        return this;
    }
    incIncrementScore(score=1){
        this.score += score;
        return this;
    }
    incSeeScore(){
        console.log("The score of this username is: ", this.score);
        return this;
    }
}

class Admin extends User {
    constructor(username, email, title){
        super(username, email);
        this.title = title;
    }
    deleteUser(user){
        users = users.filter(u => u.username !== user.username);
        return this; // allow method chaining
    }
}
const userOne = new User('luigi', 'luigi@thenetninja.co.uk');
const userTwo = new User('mario', 'mario@thenetninja.co.uk');
const userThree = new Admin('shaun', 'shaun@thenetninja.co.uk', 'black-belt ninja');
// userOne.login();
// userOne.logout();
// userTwo.login();
// userTwo.logout();

let users = [userOne, userTwo, userThree];

userTwo.login()
    .incIncrementScore()
    .incIncrementScore(5)
    .incSeeScore()
    .logout();
console.log(userOne, userTwo, userThree);