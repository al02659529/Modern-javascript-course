const users = [
    {name: 'daniel', premium: true},
    {name: 'luigi', premium: false}
];

const getPremiumUsers = (users) =>{
  return users.filter(user => user.premium);
};
// export default users;

export {getPremiumUsers, users as default};