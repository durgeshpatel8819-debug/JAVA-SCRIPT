// const element=document.getElementById("first");
// element.onclick=function handleClick(){
//     element.textContent="Durgesh patel"
// }

const element=document.getElementById("first");
element.addEventListener("dblclick",()=>{
    element.textContent="Strike is comming";
})

element.addEventListener("mouseenter",()=>{
    element.style.backgroundColor='red';
})
