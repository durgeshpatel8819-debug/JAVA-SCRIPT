// function greeting(){
//     console.log("Hello Durgesh");
// }
// greeting();

// function addNumber(num1,num2,num3=0,num4=0){
//     const sum=num1+num2+num3+num4;
//     console.log(sum);

// }

//rest operator
addNumber(3,4);
addNumber(3,4,5);
addNumber(3,4,5,6);
function addNumber(...num){
    let sum =0;
    for(let n of num){
        sum=sum+n;
    }
    console.log(sum)}
// addNumber(3,4);
// addNumber(3,4,5);
// addNumber(3,4,5,6);
