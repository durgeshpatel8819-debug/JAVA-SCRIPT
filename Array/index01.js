let arr2=[10,30,50,90,11];
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

for(let num of arr){  //for of loop
    console.log(num);
}

// non permitive copy y reference hote hai
let arr=[10,30,50,90,11];
let arr1=arr;
arr1.push(30);
console.log(arr);
