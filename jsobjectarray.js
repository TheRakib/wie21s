
// js object :- 

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
    skrivaUtInfo: function skrivaUt() {
        console.log(this.adress.postcode)
        console.log(this.adress.roadname)
        return 0;
    }
}

console.log(elevInformation.skrivaUtInfo())
