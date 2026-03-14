// data type

// primitive data type

// number,string,boolean,undefine,null,bigint,symbol

// number

let a=10;
a[0]=2;

// a=2.36;
console.log(a);

// string

let c="strike is comming";
console.log(c);
console.log(typeof c);

// boolean

let login =true;
let login1=false;
console.log(login,login1);

// undefine

let user;
console.log(user);

// bigint

let num=755655n;
console.log(num);

// null

let weather =null;
console.log(weather);

// symbol

const id1=Symbol("id");
console.log(id1);


// Non permitive data type

// array,object,function

// array

let arr =[10,20,11,"durgesh"];
arr.push(90);
console.log(arr);
console.log(typeof arr);

// object

let obj ={
    name:"Durgesh",
    account:10204785,
    age:18,
    category:"gen"

}
console.log(obj);
console.log(typeof obj);

// function

let s=function add(){
    console.log("hello");
}
s();



