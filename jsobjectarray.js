
// js object :- ´
const elevInfo = {
  key:"value",
  key2:"value2"
}
// läser in data från ett object : objectnamn.key
console.log(elevInfo.key2)
//skriva key och value in i elevInfo objektet
elevInfo.key3 = "value3"
console.log(elevInfo.key3);
// embeding object
elevInfo.key4 = {
    embeddedObj:"value 5"
}
console.log(elevInfo.key4);
// embeding an array 
elevInfo.key5 = { 
    embeddedarray:[2, 3,4,6, 10 ]
}
console.log(elevInfo)
const elevInformation= {
    name:"Rakib", 
    adress: { roadname:" abc ", postcode:12345},
    shoppingList: ["something 1", "something 2"],

    // använd inte arrow funtion i object
    // annomymous function 
    skrivaUtInfo: function () {
        console.log(this.adress.postcode)
        console.log(this.adress.roadname)
        return this.name
    }
}
console.log(elevInformation.skrivaUtInfo())

// flera dimensional array 

const embeddedList = [ [100, 300, 400, 500], {name2:"value"} ,["something1", "something2", "something3", { name:"value"}]]

console.log(embeddedList[2][3].name);
console.log(embeddedList[1].name2);



// function expression
const doSum = () => {
  return (
    1+2
  ) 
}
// var namnet och parentes
const summa= doSum();
console.log(summa);




// copy ett object till annat object 
let personInfo= {
    name:"Kalle",
    address:" abc gatan "
}

let personInfo2 = {
    shoppingList: "personens shopping list "
}
// spread ... 
personInfo = { ...personInfo, ...personInfo2} 
console.log(personInfo);


// copy list / spread ...   //advanced list copying 
let list1= [12,4,5,6, 299]
list1 = [...list1, "nytt value"]
console.log(list1)

