
//const li= document.createElement("li")
function addToList(event) {
    event.preventDefault();
     const listItems=[]
    // läs in data från input 
    const listItem = document.querySelector("#list-Item").value;
      
    listItems.push(listItem);
    
   // console.log(listItems)
    const li = document.createElement("li");
    const List= document.querySelector(".list-items")
    List.appendChild(li);

    //Loopa igenom
    listItems.map( (e)=> {
        li.textContent = e;
     })
}


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
h2.setAttribute("id", "h2-idnamn");

// lägga till text i h2 
h2.textContent="hello "

//html tagg 
h2.innerHTML="<span> hej </span>  <li> list one </li>"
// skriva ut h2 element 
console.log(h2);

const span = document.querySelector("span")
//const = document.querySelector("body");

//body.appendChild(h2);

const h2id = document.querySelector("#h2-idnamn")
// removeChild 
 //body.removeChild(h2id)

 h2id.removeChild(span)



