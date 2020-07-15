// ASYNC & AWAIT

const getTodos = async () =>{

    const response = await fetch('../httpRequests/json/mario.json');
    if (response.status !== 200){
        throw new Error('Cannot fetch the data');
    }
    return await response.json();

};

getTodos()
    .then(data => console.log(`resolved: `, data))
    .catch(err => console.log(`rejected: `, err));
