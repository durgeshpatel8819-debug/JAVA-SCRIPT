const grandparent=document.getElementById("grandparent");
grandparent.addEventListener('click',(e)=>{
    console.log(e.target);
//    console.log("Grand parent is click"); 

})


const parent=document.getElementById("parent");
parent.addEventListener('click',()=>{
//    console.log("Parent is click"); 

},false)//true or false means capture on hai ki nhi


const child=document.getElementById("child");
child.addEventListener('click',()=>{
//    console.log("child is click"); 

})