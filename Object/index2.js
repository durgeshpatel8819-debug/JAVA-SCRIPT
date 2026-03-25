const user ={
    name:"Durgesh",
    Age:21,
    emailId:"durgesh@gmail.com",
    greeting:function(){
        console.log(`Strike is comming ${this.name}`);
        return 20;
    }

}
const va =user.greeting();
console.log(va);
user.greeting();