const user ={
    name:"Durgesh",
    Age:21,
    emailId:"durgesh@gmail.com",

}
console.log(user);
console.log(user.Age);

//CRUD operation :Create read update delete
user.adhar =1234;
console.log(user);//insrt  the value
// update the value
user.adhar=2000;
console.log(user);

// delete the item

delete user.adhar;
console.log(user);
