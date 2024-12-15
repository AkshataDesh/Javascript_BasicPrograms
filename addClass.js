

let y=document.getElementById("btn");
let x=document.getElementById("para");
console.log(x);
document.getElementById("btn");


document.getElementById("btn").addEventListener("click",(e)=>
{
   console.log(e);
   console.log(e.target);
  console.log(e.target.className);
  console.log(e.target.classList)




   /* x.classList.add("newclass");*/
   x.classList.toggle("newclass");

   

});



x.classList.add("newclass");
console.log(document.getElementById("para").classList);


const v1=document.getElementsByTagName("p")[1].innerText;

console.log(v1);

console.log("hi i am akshu ");
console.log(document.querySelectorAll("p"));


let z=document.getElementById("btn2");

z.addEventListener("click", (e)=>
{
console.log(e.target);
});