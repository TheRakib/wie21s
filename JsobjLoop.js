
const personObject= {
    name:"someone",
    age:100,
    employed:true
};

console.log(personObject.age)
// skriva ut values från object alt.
console.log(personObject["name"])


const keyList = Object.keys(personObject)
console.log(keyList)
keyList.map( e=> console.log(personObject[e]))

const valuesList = Object.values(personObject);
console.log(valuesList)
valuesList.map( e=> console.log(e))

const objectKeys_values = Object.entries(personObject);

console.log(objectKeys_values);


/* for .. of */ 

//for( index, element of array      )
//{ }
for( const [key, value] of objectKeys_values) {
    console.log(key, value )
}
/* 
Name : Rakib
Yrke : Lärare 
*/
