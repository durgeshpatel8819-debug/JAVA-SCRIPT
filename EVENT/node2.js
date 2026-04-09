// const child1=document.getElementById("child1");
// child1.addEventListener('click',()=>{
//     child1.textContent="I am clicked";

// })

// const parent=document.getElementById("parent");
// console.log(parent.children);

// for(let child of parent.children){
//     child.addEventListener('click',()=>{
//       child.textContent ="i am clicked";  
//     })
// }


const parent=document.getElementById("parent");
// console.log(parent.children);
parent.addEventListener('click',(e)=>{
  e.target.textContent ="I am clicked";

})

// for(let child of parent.children){
//     child.addEventListener('click',()=>{
//       child.textContent ="i am clicked";  
//     })
// }