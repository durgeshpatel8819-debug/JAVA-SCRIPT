const arr =[10,30,50,90,11];
const arr1=[20,"Rohit",40];
const arry3 =arr.concat(arr1);
console.log(arry3);

//spread operator

const arr4 = [...arr,...arr1];
console.log(arr4);

const names =["Durgesh","Vikas","Adarsh"];
// console.log(names.toString());
console.log(names.join(" -"));
console.log(names.indexOf("Adarsh"));
