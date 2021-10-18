
// https://www.khanacademy.org/computing/computer-programming/programming 

// data structure and algorithm 

// variable deklaration // defined variable // definerar man variable :-
var name;

//  initialize :- 
name=  "Rakib"


//varialbe deklaration & initialization in this statement
    //  (varje fullstädigt mening kallas for statement)
var name = "rakib";

var Name =  "rakib"; // name och Name is not the same

//kl. 10.00

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
/* console.log(list[0])
console.log(list[1])
console.log(list[2])
console.log(list[3]) */


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
/* 
   false || true 
   true && false 
 */

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


   

//print
console.log(personInfo);  