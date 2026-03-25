const user ={
    "home addres":"Bandhuwapur",
    age:19

}
console.log(user["home addres"]);
const user2=user;
user.age=22;
console.log(user2);
console.log(Object.keys(user));//key values
console.log(Object.values(user));// values
console.log(Object.entries(user));// both key and values