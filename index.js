console.log('hi akshata ');
let a=10;
let name="akshata ";
console.log(a);

console.log(name);


document.write("please write here");
console.log("hello world");
console.warn("warning him to be with me");
console.error("please correct your systax");

var n=20;
var n2=90;

//console.log(n+n2);

var person=
{
    ravi:30,
    ritesh:90
};

//console.log(person);

var arr=[1,4,2,8,9,10];

arr.forEach(function(ele){ console.log(ele)});

let arr2=[2,4,5,7,8,9,10,11,0];

for(let i=0;i<arr2.length;i++)
{
    if(arr2[i]==5) continue;

   // console.log(arr2[i]);
}

let myDate=new Date();

console.log(myDate);

let ele3 = document.getElementById('click').style.border='2px solid green';
let ele= document.getElementById('click');
//console.log(ele);

let ele2= document.getElementsByClassName('container2');
//console.log(ele2);

ele2[0].style.background= "yellow";

function clicked()
{
    console.log('your cliked happy now');
}

//id=firstcontainer

firstcontainer.addEventListener('click',function(){
    document.querySelectorAll('.container2')[1].innerHTML= "<b> we have clicked</b>";
    console.log("click hua");})
firstcontainer.addEventListener('mouseover',function()
{
    
console.log("hamara abhi tak nahi hua ");
})

//json

obj={name: "akshata", length: 10};

jso=JSON.stringify(obj);
console.log(jso);
