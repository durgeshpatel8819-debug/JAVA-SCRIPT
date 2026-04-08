// const newElement=document.createElement("h2");
// newElement.textContent="Durgesh patel";
// newElement.id="second";

// //select element
// const element = document.getElementById("first");
// element.after(newElement);

// const newElement2=document.createElement("h3");
// newElement2.textContent="Diwali is comming";
// newElement2.id="third";
// // newElement2.className="diwali";
// newElement2.classList.add("diwali");
// newElement2.classList.add("holi");
// newElement2.style.backgroundColor="pink";
// newElement2.style.fontSize="20px";

// const element2=document.getElementById("second");
// element2.after(newElement2);

// let list=document.createElement("li");
// list.textContent="milk";

// let list2=document.createElement("li");
// list2.textContent="cake";

// let list3=document.createElement("li");
// list3.textContent="halwa";

// let list4=document.createElement("li");
// list4.textContent="panner";

// const unorderlist=document.getElementById("listing");
// unorderlist.append(list,list2);
// unorderlist.prepend(list3);
// list.after(list4);

//easy way to create list

const arr =["milk","halwa","paneer","tofu","tea"];
const unorderlist=document.getElementById("listing");
const fragement = document.createDocumentFragment();

for (let food of arr){
    const createlist =document.createElement("li");
    createlist.textContent =food;
    fragement.append(createlist);
    
}
unorderlist.append(fragement);