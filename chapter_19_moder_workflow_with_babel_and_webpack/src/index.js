import {styleBody, addTitle, contact} from "./dom";
import users, {getPremiumUsers} from './data'


console.log('index file');
addTitle('test');
styleBody();
console.log(contact);
console.log(users);
console.log('premium users: ', getPremiumUsers(users));
console.log('testerino 2');
