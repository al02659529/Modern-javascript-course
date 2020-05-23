let email = 'danielrosales@outlook.com';
let index =  email.indexOf("@");
let length = email.length;
let server = "";

for (let i in email){
   if(i > index){
        server += email[i];
   }
}

// console.log(server);
console.log(email.slice(index + 1, length)); // SLice inicia cortando desde un lugar hacia el numero indicado

