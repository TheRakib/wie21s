/* 
// https://www.khanacademy.org/computing/computer-programming/programming 

// data structure and algorithm 

// emcascript 5, 6:let , const istället för var

// variable deklaration // defined variable // definerar man variable :-
var name;

//  initialize :- 
name=  "Rakib"


//varialbe deklaration & initialization in this statement
    //  (varje fullstädigt mening kallas for statement)
var name = "rakib";

var Name =  "rakib"; // name och Name is not the same



// web frontend api /browser api 

// data types/datatyper: 
// text - string 
// 10 - integer -heltal 
// 10.12 -decimal tal /float 
// boolean- bool- true/false 
// object - { key : value}
// list/array : [1, 3, 4, 5 ]

// tvång konvertering / coercion  when två olika data typer plussas ihop js coercion påverkar resultat. 
// NaN : Not a Number 

// boolean true/false 
var isEmployeed = true;
var isEmployeed= false;

//object 
var personInfo= {

    name:"rakib", 
    age: 28, 
    isEmployeed:true

}

// array 
var list = [ 5, 14, 15, 24]

// hur skriver ut values från en lista ??

// indexnummer : börjar från 0. 
 console.log(list[0])
console.log(list[1])
console.log(list[2])
console.log(list[3])


// var i = 1 
//var i = 1;
 // var i = i+1 // alt  i++

// loop:-  for , foreach 

//for (start av loopen; vilkor; ökning/minskning )
// { så länge vilkor är sant kommer att köras loopen }

for(var index= 0; index< 4 ; index++) 
{
    console.log( list[index] )
    
}
// en lika med = : brukar vi tilldela value 
// två lika med == : jämför med två values 
// tre lika med === :  Jämför samt kolla data typen 

// jämförelse :När man jämför två values - resultat blir true/false 

   // < 
   // > 
   // ==  
   // ===
   // !   //not
   // => 
   // =< 
   // !=
   
   // lägger man flera vilkor då används de 
   //  && : and 
   //  || : or 



   var age = 11;

   false || true 
   true && false 


   // conditonal / vilkorsats

   if(age>19)
   {
       console.log("kommer att köras när vilkoret är sant ");
   }
   // man kan köra if men varje if körs
   // else if körs bara om ovanstående vilkoret är false 
   else if(age>10){
       console.log("else if körs ")
   }

   else {
       console.log("andra delen kommer att köras ")
   }


   // function/metod: 

   //visa saker och ting/ syntax är js egna keyword till ex. function ,
   // var, for , if , else ..... 

   // . in i 

   //define 
   function skrivaUt() {
       //vad function gör 
       console.log("Hello Wie21s")
   }
   

   // function call, anropar vi funktionen
   skrivaUt() // skriver ut "hello Wie21s i browsers' console"

   //print
console.log(personInfo);   */



/* document.querySelector("h1").textContent;

document.querySelector("p").textContent;

console.log(document.querySelector("p").textContent + document.querySelector("h1").textContent)

console.log(document.querySelector("p").textContent + document.querySelector("h1").textContent)
//document.write( document.querySelector("h1").textContent)
*/
/* var h1 = document.querySelector("h1").textContent;
var p = document.querySelector("p").textContent;

console.log(h1+p) */


// document.querySelector("h1")
// document.querySelector(".classnamnet")
// document.querySelector("#idnamnet")

     //.textContent
     //.innerHTML 
     //.value   // input fält



   /*  // ska skapa en p element med hjälp av js
    var p2= document.createElement("p")   //skapar en element. 
    // och skriva lite content i p element
    p2.textContent ="Hello från wie21s";
    
    // lägger vi p element i html filen'
     // steg1: välj nån befientlig element
     var body = document.querySelector("body")
     // steg2: append/lägg till p element in i body 
     body.appendChild(p2)


// skapa en h2 tag/element och vill jag lägga h2 in i div element. 

var h2 = document.createElement("h2");

h2.textContent ="hello rubrik 2";


var div = document.querySelector("div");

div.appendChild(h2);
 */

/*
var li1 = document.querySelector("#li-1").textContent
var li2 = document.querySelector("#li-2").textContent
var li3 = document.querySelector("#li-3").textContent
var li4 = document.querySelector("#li-4").textContent
var li5 = document.querySelector("#li-5").textContent


var li1Converted= Number(li1)

console.log(li1Converted+Number(li2)+Number(li3)+Number(li4)+Number(li5))

*/


/*
var li = document.querySelectorAll("li");
console.log(li);
//for loop.
var counter = 0

for(var i=0; i<li.length; i++)
{
   console.log(Number(li[i].textContent))
    counter += Number(li[i].textContent) ;
   //plusa ihop sifforna 
}
console.log(counter)
// skriva ut sifforna i prislista diven
var prislista = document.querySelector(".prisLista");
prislista.textContent = "Totalt blir " + counter;
*/
//kl. 11.00



/*

var li = document.querySelectorAll("li");

var counter = 0
var mindreSiffror= 0

for(var i=0; i<li.length; i++)
{
    if(Number( li[i].textContent  ) > 50)
    {
         counter += Number(li[i].textContent) ;
    }
   //plusa ihop sifforna 
   else {
       console.log( Number(li[i].textContent))
       mindreSiffror += Number(li[i].textContent)
   }
}
// skriva ut sifforna i prislista diven
var prislista = document.querySelector(".prisLista");
prislista.textContent = "Totalt blir " + counter;
var minValue = document.querySelector(".minValue")
minValue.textContent = "Totalt blir " + mindreSiffror;
*/


// username, email, password 
// userInfo  {usernane, email , password }

/*
var userInfo = {
    username:"Randy Marsh",
    email:"TregidyFirm@gmail.com",
    password:"*********"
}

console.log(userInfo.username)
console.log(userInfo.email)
console.log(userInfo.password)
*/

/*
var userInfo = {
    username:"Randy Marsh",
    email:"TregidyFirm@gmail.com",
    password:"*********",
    adress: {gatuadress: " bla bla bla", zipCode:12222, country:"sweden"},
    shoppingList:["troja", "t-shirt", "skor"] // element 
}

console.log(userInfo.adress.zipCode);

console.log(userInfo.shoppingList[1])

** 
*/

/*
// arguement 
skrivaUt("hej hej" , 10)

skrivaUt("hej", " user")

skrivaUt(" HI", 22)

skrivaUt(" Hello world ", 33)




//function parameter // temperary value // template var
function skrivaUt(vadsomHelstnamn,b) {
    console.log(vadsomHelstnamn+ b)
}
*/

/* 

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/
var userInfo = {
    username:"Randy Marsh",
    email:"TregidyFirm@gmail.com",
    password:"*********",
    adress: {gatuadress: " bla bla bla", zipCode:12222, country:"sweden"},
    shoppingList:["troja", "t-shirt", "skor"] // element 
}
Övning 1: Loopa igenom shoppingList från userInfo objektet och skriva ut i consolen. 
Övning 2: Skapa en function som kan ta 2 siffror som arguement och 
skriva ut summa av de två siffror i consolen. 
     2. Skriver du summan in i div tag i html 
 
*/

/*
var number; // var definition/deklaration

number= 10;  // Initialization 


var number = 1000;
var number = 1000;
var number = 100000;
*/
//let och const 

const number = 1000;  // deklaration 
//number = 10;  // initialization 

//number = 100000 // initalization //assignment 

console.log(number)



// https://www.geeksforgeeks.org/javascript-operators/ 

//10 =="10"
// == 
// ===
// ! 
// <
// > 
// =>
// =<

/*
// vilkorsats: 
if(10=="10") {
    console.log("den här raden kommer att köras")
}
else 
{

}
*/

//  10=="10" ?  console.log("true") : console.log("else ")



// loop : for , map  , filter , foreach 

/*
const namnList = ["Erik", "Philip", "tom" ]

console.log(namnList[0])
console.log(namnList[1])
console.log(namnList[2])

for( let i = namnList.length -1 ; i<namnList.length; i--){

    //console.log(i)
    console.log(namnList[i])
}

*/


// i+=1 === i++

// for (start av loopen; vilkor; i++/ökning/minskning av start value) 
// {   block   }

// övning 1: loopa igenom 100 till 0
// övning 2: loopa igenom 0 till 100;

/* 
// function deklaration
 function skrivaUt() {
     console.log("vi försöker skriva ut nåt") 
 }


 //function anropning / call a function 
skrivaUt()
// till kl. 10.00 

// parameter// tillfällig variable 
              // typescript 
function addNumber(a, b){
    
    console.log(a/b)
    return 100
}
// arguement

var returnedValue = addNumber(2000, 200)

console.log("return value" , returnedValue)
// return values 

*/


// DOM : document object model 

const listOne = document.querySelector("#li-1");

//console.log(Number(listOne.textContent))
//console.log(listOne.innerHTML)
// Number("10" )

/************************************** 
 * Element creation with js 
 * 
***************************************/

/*
//vi skapar en element och pusha detta i html 
const section = document.createElement("section")
const body = document.querySelector("body")
body.appendChild(section)
section.textContent =" hello från section "

*/

/************************************** 
 * Element deletion using js
 * 
***************************************/

const ul = document.querySelector("ul") // parent element

const listTwo = document.querySelector("#li-2") // väljer vi child

ul.removeChild(listTwo); // remove child element

// CRUD : create , read, update and delete


/************************************** 
 * JS event listener
***************************************/

/*
const btn = document.querySelector(".btn")

btn.addEventListener("click", function eventListen() { console.log("Hello från click")})
*/

const btn = document.querySelector(".btn");

function eventListen() {
    const section = document.createElement("section")
    const body = document.querySelector("body")
    body.appendChild(section)
    section.textContent = " hello från section "
}

btn.addEventListener("click", eventListen)

function addNumbers(e) {

     e.preventDefault()
     const inputNumOne = document.querySelector("#num-1").value

     
     let inputNumTwo = document.querySelector("#num-2").value
     inputNumTwo = ""
     
     console.log(Number(inputNumOne) + Number(inputNumTwo))
     
}

// Övning 3: skriva ut summan av dem två talen i en div tagg i html document 

const addNumberBtn= document.querySelector(".addNumber")

addNumberBtn.addEventListener("click", addNumbers)

/* 
Övning 4: 
Skapa en html formulär 
ta in username, email , phoneNumber från user 
Skriva ut dem i en div tagg i html document

*/
