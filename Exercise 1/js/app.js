const box1=document.getElementById("container1");
const box2=document.getElementById("container2");
const child3=document.getElementById("child3");
const child4=document.getElementById("child4");
child4.remove();

box2.appendChild(child3);
// const box3=document.getElementById("container3");
let newchild=document.createElement("div");
newchild.innerHTML='<div class="item">10</div>';
document.getElementById("container3").appendChild(newchild);


let changeColor=document.createElement("style");
changeColor.innerHTML='.containerBlue{color: red;}'
document.head.appendChild(changeColor);

