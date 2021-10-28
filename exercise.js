
//Övning 1: 
/*
var a = 12;
var b= 40
console.log(a+b)

*/

function addNumbers(a, b){

    console.log(a+b)
}

addNumbers(12, 40)


//övning 2:
var lista = [1,2, 3,4,5,6,7,8,9,10]

/*for(var i= 0; i<lista.length; i+=2){
    console.log(lista[i])
}  */

for(var i= 0; i<lista.length; i++)
{
    //if( value%2==0    )
    if(lista[i]%2 == 0){
        console.log(lista[i], "Jämna tal ")
    }
    else {
        console.log( lista[i], "udda tal")
    }

}

// Övning 3: 
for(var i = 0; i<lista.length; i++)
{
    console.log(lista[i])
}
// alt. 
lista.map( (e) => console.log(e) )

// Övning 4: 

function Calculate(a, b){
    return a+b;
}

const summa= document.querySelector(".summa")

summa.textContent = Calculate(100, 50)



/* document.querySelector(".summa").textContent = Calculate(100, 50)*/ 

// function expression 
var count = (a, b)=> { 
    console.log(a+b) 
    return a + b
}

// hur ska vi anropa funktionen 
//doMath(1,2)
count(10,20)