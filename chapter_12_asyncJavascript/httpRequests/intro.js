const getTodos = (url) =>{

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', ()=>{
            // console.log(request, request.readyState);
            if (request.readyState === 4 && request.status === 200){
                resolve(request.responseText);
            }else if (request.readyState === 4){
                reject('Could not fetch data');
            }
        });
        request.open('GET', url);
        request.send();
        }
        );
};


// HORRIBLE WAY TO NEST REQUESTS AND WAIT FOR ONE TO END IN ORDER TO DO THE NEXT ONE
// getTodos('json/luigi.json', (err, data)=> {
//     console.log(data);
//     getTodos('json/luigi.json', (err, data) => {
//         console.log(data);
//         getTodos('json/shaun.json', (err, data) => {
//             console.log(data);
//         });
//     });
// });

// PROMISE EXAMPLE - BEST WAY TO DO THE ABOVE


getTodos('json/luigi.json').then(data => {
    console.log('promise 1 resolved:', data);
    return getTodos('json/mario.json');
}).then(data => {
    console.log('promise 2 resolved:', data);
    return getTodos('json/shaun.json');
}).then(data => {
    console.log('promise 3 resolved:', data);
}).catch(err => {
    console.log('promise rejected:', err);
});