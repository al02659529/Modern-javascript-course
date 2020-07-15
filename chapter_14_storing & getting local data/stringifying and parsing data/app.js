const todos = [
    {text: 'play mariokart', author: 'shaun'},
    {text: 'buy some milk', author: 'mario'},
    {text: 'buy some bread', author: 'luigi'}
];

// JSON.stringify(todos) CONVERTS THE TO DO OBJECT INTO JSON STRING //
localStorage.setItem('todos', JSON.stringify(todos));

const stored = localStorage.getItem('todos');
// console.log(stored);

console.log(JSON.parse(stored)); // convert JSON to Object
