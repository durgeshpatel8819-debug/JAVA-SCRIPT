//Set is collection of unique value

const arr = [10,20,10,40,20];
console.log(arr);

const s1= new Set(arr);
s1.add(50);
console.log(s1);
console.log(s1.has(20));//check element are present or not