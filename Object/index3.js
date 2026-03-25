const user ={
    name:"Durgesh",
    Age:21,
    emailId:"durgesh@gmail.com",
    amount:3400,
    address :{
    city:"Ayodhya",
    state:"Uttar Pradesh"
    }
}
console.log(user.address);

// shallow copy
const user2={...user};
user2.name="Mohan";
console.log(user);

// Deep copy

const user2 =structuredClone(user);
user2.address.city ="Lucknow";
console.log(user);