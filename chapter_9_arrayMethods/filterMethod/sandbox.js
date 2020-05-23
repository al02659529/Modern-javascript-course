const scores = [10, 30, 15, 25, 50, 40, 5];

// const highScores = scores.filter(score => score > 20);
// console.log(highScores);

const users = [
    {name: 'shaun', premium: true},
    {name: 'yoshi', premium: false},
    {name: 'mario', premium: false},
    {name: 'chun-li', premium: true}
];

const premiumUsers = users.filter(user => user.premium); // filters(call back function that must return true if you wan't that value)

console.log(premiumUsers);