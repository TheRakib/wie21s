
const lista = [12, 3,44,55, 100, 400, 450];

// skriva ut list element
console.log(lista[0])


// lägga till value/element in i en lista 
lista.push(1200);

console.log(lista)

// ta bort value från en lista 
lista.pop();

lista.splice(2, 3);


// + och , när man blandar text med object/array
console.log("efter splice " , lista) // coersion /tvång konvertering 

// filter , 
/*
const filteratLista = lista.filter( function (e) {

    return e>44
})
*/
const filteratLista = lista.filter(  (e)=> e>44)

console.log("filteratLista " , filteratLista)

//map
lista.map( (e) =>console.log("map lista " , e))


//  function 
function doSomething() {
    console.log("do something")
}

//doSomething()

// Arrow function: ()=> {console.log("hej ")}
// annonymous function 

// reverse en string 
const name = "Rakib";
// split()
let convertedName = name.split("")
console.log(convertedName);
const reversedName= convertedName.reverse();
const stringName = reversedName.join("")
console.log(stringName)
//name.split("").reverse().join("") // function/method chaining 
//Regex MDN  
