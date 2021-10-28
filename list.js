//console.log("hello from list js")
//var listItems;
//console.log(listItems)
function addToList(event) {
    event.preventDefault();
    const listItems=[]
    // läs in data från input 
    const listItem = document.querySelector("#list-Item").value;
    //console.log(listItem);
    listItems.push(listItem);
    // skapa en li för varje input läsning 
   // const li =document.createElement("li");
   // li.textContent = listItem;
    // pusha li till .list-item div(parent)
   // const listDiv = document.querySelector(".list-items");
   // listDiv.appendChild(li)
 //console.log(listItems)
 const li = document.createElement("li")
 const listDiv = document.querySelector(".list-items")
       listDiv.appendChild(li);
for( var i = 0; i<listItems.length; i++)
{
   
       li.textContent= listItem;
       
}
/*
// alt. lössning
listItems.map( (e)=> {
       const li = document.createElement("li")
       li.textContent= listItem;
       const listDiv = document.querySelector(".list-items")
       listDiv.appendChild(li);
    })
*/

}
//console.log(listItems)

// implementering av array i li 



document.querySelector(".list-btn").addEventListener("click", addToList);


// local variable vs global variable 

//deklarerat och initialerat variable 
 

var username="otto";
function skrivaUtName() {
    username="Rakib"
   // console.log(username);
}
skrivaUtName();
//const username="någonsnamn"
console.log(username);


//DOM manuplation :
// vi kan läsa html object/element 
// document.querySelector("")
//  .textContent/ .value   (input fält )

// lyssna på event :- 
// document.querySelector(".btn").addEventListener("click", FunctionName)

//function FunctionName(e) {  e.preventDefault()   }


// document.createElement("li")
//create a h2 element
const h2= document.createElement("h2");
// set attribute 
h2.setAttribute("class", "h2-class");

// lägga till text i h2 
h2.textContent="hello "

//html tagg 
h2.innerHTML="<span> hej </span>"
// skriva ut h2 element 
console.log(h2);


const body= document.querySelector("body");

body.appendChild(h2);

// removeChild 
// body.removeChild(h2)



