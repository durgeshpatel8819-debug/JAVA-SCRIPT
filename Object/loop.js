const user ={
    name:"Durgesh",
    Age:21,
    emailId:"durgesh@gmail.com",

}
for(let keys of Object.keys(user)){
console.log(keys);
}
for(let values of Object.values(user)){
console.log(values);
}
for(let values of Object.entries(user)){
console.log(values);
}
for(let [keys,values] of Object.entries(user)){
console.log(keys,values);
}

for(let keys in user){
    console.log(keys,user[keys]);
}
//object distructuring

const{name,Age}=user;
console.log(name,Age);

// // array distructuring
const arr =[10,20,50,90];
const[first,second]=arr;
console.log(first,second);